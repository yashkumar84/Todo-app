import { Outlet } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const ToDo = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader className="text-center bg-blue-500 text-white rounded-t-lg py-6">
          <CardTitle className="text-3xl font-bold mb-2">
            Welcome to ToDo List App
          </CardTitle>
          <CardDescription className="text-white/80">
            <Badge variant="secondary" className="text-sm">
              By Brain Mentors
            </Badge>
          </CardDescription>
        </CardHeader>

        <Separator className="my-4" />

        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Organize your tasks, boost your productivity
            </p>

            {/* Placeholder for todo content */}
            <Outlet />
          </div>
        </CardContent>
      </Card>

      {/* Optional: Footer or additional information */}
      <div className="text-center mt-6 text-gray-500">
        <p>© 2024 Brain Mentors Todo App</p>
      </div>
    </div>
  );
};

export default ToDo;
