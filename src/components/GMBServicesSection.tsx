import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info, Package, Tag, FileText, DollarSign } from "lucide-react";
import { useState } from "react";

interface GMBService {
  name: string;
  description: string;
  price: string;
  category: string;
}

interface GMBServicesSectionProps {
  services: GMBService[];
}

interface ServiceCategory {
  name: string;
  icon: React.ElementType;
  keywords: string[];
  services: GMBService[];
}

const categorizeServices = (services: GMBService[]): ServiceCategory[] => {
  const categoryDefinitions: Omit<ServiceCategory, 'services'>[] = [
    {
      name: 'Carpet & Rug Services',
      icon: Package,
      keywords: ['carpet', 'rug', 'flooring', 'wool', 'nylon', 'area rug']
    },
    {
      name: 'Stain & Spot Treatment',
      icon: Tag,
      keywords: ['stain', 'spot', 'spill', 'odor', 'odour', 'pet', 'wax', 'removal']
    },
    {
      name: 'Upholstery & Furniture',
      icon: Package,
      keywords: ['sofa', 'mattress', 'leather', 'furniture', 'chair', 'upholster', 'couch']
    },
    {
      name: 'Deep & Specialized Cleaning',
      icon: Tag,
      keywords: ['deep', 'steam', 'special', 'heavy', 'sanitiz', 'eco-friendly', 'dry clean', 'treatment']
    },
    {
      name: 'Additional Services',
      icon: Package,
      keywords: ['window', 'oven', 'patio', 'driveway', 'office', 'tenancy', 'decking', 'party', 'site']
    }
  ];

  const categorizedServices: ServiceCategory[] = categoryDefinitions.map(def => ({
    ...def,
    services: []
  }));

  const generalCategory: ServiceCategory = {
    name: 'General Services',
    icon: FileText,
    keywords: [],
    services: []
  };

  services.forEach(service => {
    let categorized = false;
    const serviceName = service.name.toLowerCase();

    for (const category of categorizedServices) {
      if (category.keywords.some(keyword => serviceName.includes(keyword))) {
        category.services.push(service);
        categorized = true;
        break;
      }
    }

    if (!categorized) {
      generalCategory.services.push(service);
    }
  });

  if (generalCategory.services.length > 0) {
    categorizedServices.push(generalCategory);
  }

  return categorizedServices.filter(cat => cat.services.length > 0);
};

export const GMBServicesSection = ({ services }: GMBServicesSectionProps) => {
  const [expandedServices, setExpandedServices] = useState<Record<string, boolean>>({});

  const categories = categorizeServices(services);
  const totalServices = services.length;
  const servicesWithPrice = services.filter(s => s.price).length;
  const servicesWithDescription = services.filter(s => s.description).length;

  const toggleShowMore = (categoryName: string) => {
    setExpandedServices(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const getDisplayedServices = (categoryServices: GMBService[], categoryName: string) => {
    const isExpanded = expandedServices[categoryName];
    return isExpanded ? categoryServices : categoryServices.slice(0, 10);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="h-5 w-5" />
          GMB Services Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="text-2xl font-bold text-primary">{totalServices}</div>
            <div className="text-xs text-muted-foreground">Total Services</div>
          </div>
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="text-2xl font-bold text-primary">{categories.length}</div>
            <div className="text-xs text-muted-foreground">Categories</div>
          </div>
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="text-2xl font-bold text-primary">{servicesWithPrice}</div>
            <div className="text-xs text-muted-foreground">With Pricing</div>
          </div>
        </div>

        {/* Service Coverage Analysis */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Service Distribution</h4>
          {categories.map((category) => {
            const percentage = (category.services.length / totalServices) * 100;
            return (
              <div key={category.name} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">{category.name}</span>
                  <span className="font-medium">{category.services.length}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Missing Information Alert */}
        {(servicesWithPrice === 0 || servicesWithDescription === 0) && (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Optimization Tip:</strong> Adding {servicesWithPrice === 0 && 'prices'}{servicesWithPrice === 0 && servicesWithDescription === 0 && ' and '}{servicesWithDescription === 0 && 'descriptions'} to services can improve customer engagement.
            </AlertDescription>
          </Alert>
        )}

        {/* Services by Category (Accordion) */}
        <div>
          <h4 className="text-sm font-medium mb-2">Services by Category</h4>
          <Accordion type="single" collapsible defaultValue={categories[0]?.name}>
            {categories.map((category) => {
              const CategoryIcon = category.icon;
              const displayedServices = getDisplayedServices(category.services, category.name);
              const hasMore = category.services.length > 10;
              const isExpanded = expandedServices[category.name];

              return (
                <AccordionItem key={category.name} value={category.name}>
                  <AccordionTrigger className="text-sm hover:no-underline">
                    <div className="flex items-center gap-2">
                      <CategoryIcon className="h-4 w-4" />
                      <span>{category.name}</span>
                      <Badge variant="secondary" className="ml-auto mr-2">
                        {category.services.length}
                      </Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="grid grid-cols-1 gap-2">
                        {displayedServices.map((service, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-start gap-2 p-2 rounded-md hover:bg-muted/50 transition-colors"
                          >
                            <span className="text-muted-foreground mt-1">•</span>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium">{service.name}</div>
                              {service.price && (
                                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                                  <DollarSign className="h-3 w-3" />
                                  {service.price}
                                </div>
                              )}
                              {service.description && (
                                <div className="text-xs text-muted-foreground mt-0.5">
                                  {service.description}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {hasMore && (
                        <button
                          onClick={() => toggleShowMore(category.name)}
                          className="w-full text-xs text-primary hover:underline py-2"
                        >
                          {isExpanded 
                            ? `Show Less` 
                            : `Show ${category.services.length - 10} More`}
                        </button>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </CardContent>
    </Card>
  );
};
