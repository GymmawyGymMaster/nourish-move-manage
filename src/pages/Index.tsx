import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useTheme } from "@/contexts/ThemeContext";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { QuickActions } from "@/components/dashboard/QuickActions";
import {
  Users,
  Calendar,
  TrendingUp,
  Activity,
  Dumbbell,
  Utensils,
  ClipboardCheck,
  DollarSign,
} from "lucide-react";

const Index = () => {
  const { branding } = useTheme();
  
  return (
    <DashboardLayout title={branding.dashboardTitle}>
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Clients"
            value="1,234"
            change="+12% from last month"
            changeType="positive"
            icon={Users}
          />
          <StatsCard
            title="Active Programs"
            value="567"
            change="+8% from last month"
            changeType="positive"
            icon={Activity}
          />
          <StatsCard
            title="Appointments Today"
            value="23"
            change="2 cancelled"
            changeType="neutral"
            icon={Calendar}
          />
          <StatsCard
            title="Monthly Revenue"
            value="$45,231"
            change="+15% from last month"
            changeType="positive"
            icon={DollarSign}
          />
        </div>

        {/* Secondary Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Workout Plans"
            value="89"
            change="Active programs"
            changeType="neutral"
            icon={Dumbbell}
          />
          <StatsCard
            title="Diet Plans"
            value="156"
            change="Nutritional programs"
            changeType="neutral"
            icon={Utensils}
          />
          <StatsCard
            title="Check-ins Pending"
            value="34"
            change="Awaiting response"
            changeType="neutral"
            icon={ClipboardCheck}
          />
          <StatsCard
            title="Growth Rate"
            value="23%"
            change="Monthly increase"
            changeType="positive"
            icon={TrendingUp}
          />
        </div>

        {/* Activity and Actions */}
        <div className="grid gap-6 lg:grid-cols-2">
          <RecentActivity />
          <QuickActions />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
