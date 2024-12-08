import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Develop By Brain Mentors
          </CardTitle>
          <CardDescription>
            Empowering Learning through Innovative Technology
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage
                src="/api/placeholder/150/150"
                alt="Brain Mentors Logo"
              />
              <AvatarFallback>BM</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm text-muted-foreground">
                Brain Mentors is dedicated to providing cutting-edge educational
                solutions and transformative learning experiences.
              </p>
              <div className="mt-2">
                <Badge variant="secondary">Education</Badge>
                <Badge variant="outline" className="ml-2">
                  Technology
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
