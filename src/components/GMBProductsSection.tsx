import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Package, FolderOpen, FileText, ExternalLink, AlertCircle, Search } from "lucide-react";
import { useState, useMemo } from "react";

export interface GMBProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  url: string;
  btn: string;
  link_to_product: string;
  collection_id: string;
  collection_name: string;
  collection_description: string;
}

interface GMBProductsSectionProps {
  products: GMBProduct[];
}

interface ProductCollection {
  id: string;
  name: string;
  description: string;
  count: number;
  products: GMBProduct[];
}

const ProductCard = ({ product }: { product: GMBProduct }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-base line-clamp-2 flex-1">{product.name}</h3>
          {product.price && (
            <Badge variant="secondary" className="shrink-0">{product.price}</Badge>
          )}
        </div>
        <div className="flex items-center gap-1 mb-3">
          <FolderOpen className="h-3 w-3 text-muted-foreground" />
          <Badge variant="outline" className="text-xs">{product.collection_name}</Badge>
        </div>
        {product.description && (
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{product.description}</p>
        )}
        <div className="flex gap-2">
          <a
            href={product.link_to_product}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 rounded-md text-sm font-medium leading-none bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3 transition-colors"
          >
            View on Google
            <ExternalLink className="size-4" />
          </a>
          {product.url && (
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-md text-sm font-medium leading-none border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 transition-colors"
            >
              Website
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export const GMBProductsSection = ({ products }: GMBProductsSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [selectedCollection, setSelectedCollection] = useState<string>("all");

  // Calculate statistics
  const stats = useMemo(() => {
    const withDescription = products.filter(p => p.description).length;
    const withUrl = products.filter(p => p.url).length;
    const withPrice = products.filter(p => p.price).length;
    const collections = new Set(products.map(p => p.collection_id)).size;

    return {
      total: products.length,
      collections,
      withDescription,
      withUrl,
      withPrice,
    };
  }, [products]);

  // Group products by collection
  const collections: ProductCollection[] = useMemo(() => {
    const grouped = products.reduce((acc, product) => {
      const collectionId = product.collection_id;
      if (!acc[collectionId]) {
        acc[collectionId] = {
          id: collectionId,
          name: product.collection_name,
          description: product.collection_description,
          count: 0,
          products: [],
        };
      }
      acc[collectionId].count++;
      acc[collectionId].products.push(product);
      return acc;
    }, {} as Record<string, ProductCollection>);

    return Object.values(grouped).sort((a, b) => b.count - a.count);
  }, [products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by collection
    if (selectedCollection !== "all") {
      filtered = filtered.filter(p => p.collection_id === selectedCollection);
    }

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "collection":
          return a.collection_name.localeCompare(b.collection_name);
        default:
          return 0;
      }
    });

    return sorted;
  }, [products, searchQuery, sortBy, selectedCollection]);

  const missingData = stats.total - Math.max(stats.withDescription, stats.withUrl);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Package className="h-5 w-5 text-primary" />
          <CardTitle>GMB Products Catalog</CardTitle>
        </div>
        <CardDescription>Visual showcase of products listed on Google My Business</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="all">All Products</TabsTrigger>
            <TabsTrigger value="collections">By Collection</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <Card>
                <CardContent className="pt-4 sm:pt-6">
                  <div className="text-center">
                    <Package className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl sm:text-3xl font-bold text-foreground">{stats.total}</div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Total Products</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 sm:pt-6">
                  <div className="text-center">
                    <FolderOpen className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl sm:text-3xl font-bold text-foreground">{stats.collections}</div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Collections</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 sm:pt-6">
                  <div className="text-center">
                    <FileText className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl sm:text-3xl font-bold text-foreground">{stats.withDescription}</div>
                    <p className="text-xs sm:text-sm text-muted-foreground">With Descriptions</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 sm:pt-6">
                  <div className="text-center">
                    <ExternalLink className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl sm:text-3xl font-bold text-foreground">{stats.withUrl}</div>
                    <p className="text-xs sm:text-sm text-muted-foreground">With Website Links</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Collection Distribution */}
            <div>
              <h3 className="font-semibold mb-4">Collection Distribution</h3>
              <div className="space-y-3">
                {collections.map((collection) => {
                  const percentage = (collection.count / stats.total) * 100;
                  return (
                    <div key={collection.id}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">{collection.name}</span>
                        <span className="text-muted-foreground">{collection.count} products</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Featured Collections Preview */}
            <div>
              <h3 className="font-semibold mb-4">Featured Collections</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {collections.slice(0, 4).map((collection) => {
                  const firstProduct = collection.products[0];
                  return (
                    <Card
                      key={collection.id}
                      className="cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => {
                        setSelectedCollection(collection.id);
                        // Switch to By Collection tab programmatically
                        const collectionsTab = document.querySelector('[value="collections"]') as HTMLElement;
                        collectionsTab?.click();
                      }}
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={firstProduct.image}
                          alt={collection.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/placeholder.svg";
                          }}
                        />
                      </div>
                      <CardContent className="p-3">
                        <p className="font-semibold text-sm line-clamp-1">{collection.name}</p>
                        <p className="text-xs text-muted-foreground">{collection.count} items</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Optimization Alert */}
            {missingData > 0 && (
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  {stats.withPrice === 0 && (
                    <span className="block mb-1">
                      <strong>No pricing information:</strong> None of your products display pricing.
                    </span>
                  )}
                  {stats.total - stats.withDescription > 0 && (
                    <span className="block mb-1">
                      <strong>{stats.total - stats.withDescription} products missing descriptions:</strong> Adding detailed descriptions can improve engagement.
                    </span>
                  )}
                  {stats.total - stats.withUrl > 0 && (
                    <span className="block">
                      <strong>{stats.total - stats.withUrl} products without website links:</strong> Consider adding direct links to product pages.
                    </span>
                  )}
                </AlertDescription>
              </Alert>
            )}
          </TabsContent>

          {/* All Products Tab */}
          <TabsContent value="all" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="collection">Collection</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <Package className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground">
                  {searchQuery ? "Try adjusting your search query" : "No products available"}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </TabsContent>

          {/* By Collection Tab */}
          <TabsContent value="collections" className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedCollection === "all" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedCollection("all")}
              >
                All ({stats.total})
              </Badge>
              {collections.map((collection) => (
                <Badge
                  key={collection.id}
                  variant={selectedCollection === collection.id ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCollection(collection.id)}
                >
                  {collection.name} ({collection.count})
                </Badge>
              ))}
            </div>

            {selectedCollection !== "all" && (
              <div className="mb-4">
                {collections.find(c => c.id === selectedCollection)?.description && (
                  <p className="text-sm text-muted-foreground">
                    {collections.find(c => c.id === selectedCollection)?.description}
                  </p>
                )}
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <Package className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">No products in this collection</h3>
                <p className="text-muted-foreground">Try selecting a different collection</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
