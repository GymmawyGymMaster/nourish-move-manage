import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const MobileCustomization = () => {
  const [mobileAddress, setMobileAddress] = useState("");

  const handleSave = () => {
    // Save mobile address logic here
    toast({
      title: "Settings saved",
      description: "Mobile customization settings have been updated.",
    });
  };

  return (
    <DashboardLayout title="Mobile App Customization">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Mobile App Customization</h1>
          <p className="text-muted-foreground mt-2">
            Configure your mobile application settings and preferences.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Mobile Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="mobile-address">Mobile Address</Label>
              <Input
                id="mobile-address"
                type="text"
                placeholder="Enter mobile address"
                value={mobileAddress}
                onChange={(e) => setMobileAddress(e.target.value)}
              />
            </div>
            
            <Button onClick={handleSave} className="w-full">
              Save Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MobileCustomization;