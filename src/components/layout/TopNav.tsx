import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  Calendar,
  MessageSquare,
  Plus,
  Search,
  Settings,
  User,
  LogOut,
  Dumbbell,
  Utensils,
  Activity,
  Heart,
  Users,
  FileText,
} from "lucide-react";
import { Input } from "@/components/ui/input";

interface TopNavProps {
  title: string;
}

export function TopNav({ title }: TopNavProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="w-64 pl-10"
          />
        </div>

        {/* Feedback Button */}
        <Button variant="outline" size="sm">
          <MessageSquare className="h-4 w-4 mr-2" />
          Feedback
        </Button>

        {/* Calendar Button */}
        <Button variant="outline" size="sm">
          <Calendar className="h-4 w-4 mr-2" />
          Calendar
        </Button>

        {/* Notifications */}
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs">
            3
          </Badge>
        </Button>

        {/* Create New Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-gradient-primary">
              <Plus className="h-4 w-4 mr-2" />
              Create New
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Utensils className="h-4 w-4 mr-2" />
              Diet Plan
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Dumbbell className="h-4 w-4 mr-2" />
              Resistance Workout
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Activity className="h-4 w-4 mr-2" />
              Fitness Plan
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Heart className="h-4 w-4 mr-2" />
              Mobility Plan
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Users className="h-4 w-4 mr-2" />
              Team Member
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FileText className="h-4 w-4 mr-2" />
              Invoice
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Calendar className="h-4 w-4 mr-2" />
              Appointment
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 pl-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                  JD
                </AvatarFallback>
              </Avatar>
              <span className="hidden md:block text-sm font-medium">John Doe</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-4 w-4 mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              <LogOut className="h-4 w-4 mr-2" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}