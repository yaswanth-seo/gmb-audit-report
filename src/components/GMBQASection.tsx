import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { MessageSquare, User, AlertCircle } from "lucide-react";
import { useState } from "react";

interface GMBAnswer {
  user_name: string;
  user_id?: string;
  answer: string;
  timestamp?: number;
  time_text: string;
  time?: string;
}

interface GMBQuestion {
  user_name: string;
  user_id?: string;
  question: string;
  quiestion_link?: string;
  id: string;
  answers?: GMBAnswer[];
}

interface GMBQASectionProps {
  questions: GMBQuestion[];
}

export function GMBQASection({ questions }: GMBQASectionProps) {
  const [showAll, setShowAll] = useState(false);
  
  // Calculate stats
  const totalQuestions = questions.length;
  const answeredQuestions = questions.filter(q => q.answers && q.answers.length > 0).length;
  const ownerResponses = questions.filter(q => 
    q.answers?.some(a => a.user_name.includes("(Owner)"))
  ).length;
  const unansweredQuestions = totalQuestions - answeredQuestions;

  const displayLimit = 30;
  const displayedQuestions = showAll ? questions : questions.slice(0, displayLimit);
  const hasMore = questions.length > displayLimit;

  const isOwnerResponse = (userName: string) => userName.includes("(Owner)");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="size-5" />
          Questions & Answers ({totalQuestions})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Total Questions</p>
            <p className="text-2xl font-bold">{totalQuestions}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Answered</p>
            <p className="text-2xl font-bold text-green-600">{answeredQuestions}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Owner Responses</p>
            <p className="text-2xl font-bold text-primary">{ownerResponses}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Unanswered</p>
            <p className="text-2xl font-bold text-orange-600">{unansweredQuestions}</p>
          </div>
        </div>

        {/* Unanswered Alert */}
        {unansweredQuestions > 0 && (
          <Alert>
            <AlertCircle className="size-4" />
            <AlertDescription>
              You have {unansweredQuestions} unanswered question{unansweredQuestions > 1 ? 's' : ''}. 
              Responding to questions helps build trust with potential customers.
            </AlertDescription>
          </Alert>
        )}

        {/* Questions & Answers List */}
        <div className="relative">
          <ScrollArea className="h-[500px] pr-4 border-t border-b border-border/50">
            <div className="space-y-4">
              {displayedQuestions.map((qa) => (
                <Card key={qa.id} className="overflow-hidden">
                  <CardContent className="p-4 space-y-4">
                    {/* Question */}
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <Avatar className="size-8">
                          <AvatarImage src="" />
                          <AvatarFallback>
                            <User className="size-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">{qa.user_name}</p>
                          <p className="text-base font-semibold">{qa.question}</p>
                        </div>
                      </div>
                    </div>

                    {/* Answers */}
                    {qa.answers && qa.answers.length > 0 ? (
                      <div className="space-y-3 ml-11">
                        {qa.answers.map((answer, index) => {
                          const isOwner = isOwnerResponse(answer.user_name);
                          return (
                            <div
                              key={index}
                              className={`p-3 rounded-lg border-l-4 ${
                                isOwner
                                  ? "bg-primary/5 border-l-primary"
                                  : "bg-muted/50 border-l-muted-foreground/20"
                              }`}
                            >
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <p className="text-sm font-medium">{answer.user_name}</p>
                                  {isOwner && (
                                    <Badge variant="default" className="text-xs">
                                      Owner
                                    </Badge>
                                  )}
                                  <span className="text-xs text-muted-foreground">
                                    {answer.time_text}
                                  </span>
                                </div>
                                <p className="text-sm">{answer.answer}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="ml-11">
                        <div className="p-3 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800">
                          <p className="text-sm text-orange-800 dark:text-orange-200">
                            No answers yet
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
          
          {/* Bottom fade gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />
        </div>

        {/* Show All Button - Always visible */}
        {hasMore && (
          <Card className="mt-4 p-4 bg-gradient-to-br from-blue-50/50 to-background dark:from-blue-950/20 dark:to-background border-2 border-blue-200 dark:border-blue-800 shadow-md">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-base text-foreground mb-1">
                  {showAll ? "Showing All Questions" : `View All ${questions.length} Questions`}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {showAll 
                    ? "Viewing complete Q&A history" 
                    : `Showing ${displayLimit} of ${questions.length} questions • Click to see all`}
                </p>
              </div>
              <Button 
                variant={showAll ? "outline" : "default"} 
                size="default" 
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less" : "View All"}
              </Button>
            </div>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
