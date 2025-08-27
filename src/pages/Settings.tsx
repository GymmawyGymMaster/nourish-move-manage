import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "@/contexts/ThemeContext";
import { useState } from "react";
import { Upload, RefreshCw, Save, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const colorPresets = [
  {
    name: "Default Purple",
    colors: {
      primary: '224 71% 64%',
      secondary: '220 14.3% 95.9%',
      accent: '220 14.3% 95.9%',
    }
  },
  {
    name: "Ocean Blue",
    colors: {
      primary: '199 89% 48%',
      secondary: '210 40% 96%',
      accent: '210 40% 96%',
    }
  },
  {
    name: "Forest Green",
    colors: {
      primary: '142 76% 36%',
      secondary: '138 76% 97%',
      accent: '138 76% 97%',
    }
  },
  {
    name: "Sunset Orange",
    colors: {
      primary: '24 95% 53%',
      secondary: '25 95% 97%',
      accent: '25 95% 97%',
    }
  },
  {
    name: "Royal Red",
    colors: {
      primary: '0 84% 60%',
      secondary: '0 85% 97%',
      accent: '0 85% 97%',
    }
  }
];

export default function Settings() {
  const { colors, branding, updateColors, updateBranding, resetToDefaults } = useTheme();
  const [tempBranding, setTempBranding] = useState(branding);
  const [tempColors, setTempColors] = useState(colors);

  const handleColorChange = (colorKey: string, value: string) => {
    setTempColors(prev => ({ ...prev, [colorKey]: value }));
  };

  const handleBrandingChange = (key: string, value: string) => {
    setTempBranding(prev => ({ ...prev, [key]: value }));
  };

  const applyPreset = (preset: typeof colorPresets[0]) => {
    const newColors = { ...tempColors, ...preset.colors };
    setTempColors(newColors);
    updateColors(newColors);
  };

  const saveChanges = () => {
    updateColors(tempColors);
    updateBranding(tempBranding);
  };

  const previewChanges = () => {
    updateColors(tempColors);
    updateBranding(tempBranding);
  };

  return (
    <DashboardLayout title="Settings - Theme Editor">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Theme Editor</h1>
            <p className="text-muted-foreground">Customize your GYM Master experience</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={previewChanges}>
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button onClick={saveChanges}>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
            <Button variant="destructive" onClick={resetToDefaults}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset to Defaults
            </Button>
          </div>
        </div>

        <Tabs defaultValue="branding" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="branding">Branding</TabsTrigger>
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="presets">Presets</TabsTrigger>
          </TabsList>

          <TabsContent value="branding" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Brand Settings</CardTitle>
                <CardDescription>
                  Customize your application name, logo, and titles
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="appName">Application Name</Label>
                  <Input
                    id="appName"
                    value={tempBranding.appName}
                    onChange={(e) => handleBrandingChange('appName', e.target.value)}
                    placeholder="GYM Master"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="dashboardTitle">Dashboard Title</Label>
                  <Input
                    id="dashboardTitle"
                    value={tempBranding.dashboardTitle}
                    onChange={(e) => handleBrandingChange('dashboardTitle', e.target.value)}
                    placeholder="GYM Master Dashboard"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="logo">Logo URL</Label>
                  <div className="flex gap-2">
                    <Input
                      id="logo"
                      value={tempBranding.logo}
                      onChange={(e) => handleBrandingChange('logo', e.target.value)}
                      placeholder="/src/assets/logo.ico"
                      className="flex-1"
                    />
                    <Button variant="outline">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload
                    </Button>
                  </div>
                </div>

                <div className="p-4 border rounded-lg bg-muted/50">
                  <h4 className="font-medium mb-2">Preview</h4>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                      <img src={tempBranding.logo} alt="Logo" className="h-5 w-5" onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }} />
                    </div>
                    <span className="font-semibold">{tempBranding.appName}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="colors" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Primary Colors</CardTitle>
                  <CardDescription>Main brand colors used throughout the application</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="primary">Primary</Label>
                    <div className="flex gap-2">
                      <Input
                        id="primary"
                        value={tempColors.primary}
                        onChange={(e) => handleColorChange('primary', e.target.value)}
                        placeholder="224 71% 64%"
                      />
                      <div 
                        className="w-10 h-10 rounded border"
                        style={{ backgroundColor: `hsl(${tempColors.primary})` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="secondary">Secondary</Label>
                    <div className="flex gap-2">
                      <Input
                        id="secondary"
                        value={tempColors.secondary}
                        onChange={(e) => handleColorChange('secondary', e.target.value)}
                        placeholder="220 14.3% 95.9%"
                      />
                      <div 
                        className="w-10 h-10 rounded border"
                        style={{ backgroundColor: `hsl(${tempColors.secondary})` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="accent">Accent</Label>
                    <div className="flex gap-2">
                      <Input
                        id="accent"
                        value={tempColors.accent}
                        onChange={(e) => handleColorChange('accent', e.target.value)}
                        placeholder="220 14.3% 95.9%"
                      />
                      <div 
                        className="w-10 h-10 rounded border"
                        style={{ backgroundColor: `hsl(${tempColors.accent})` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Status Colors</CardTitle>
                  <CardDescription>Colors for success, warning, and error states</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="success">Success</Label>
                    <div className="flex gap-2">
                      <Input
                        id="success"
                        value={tempColors.success}
                        onChange={(e) => handleColorChange('success', e.target.value)}
                        placeholder="142 76% 36%"
                      />
                      <div 
                        className="w-10 h-10 rounded border"
                        style={{ backgroundColor: `hsl(${tempColors.success})` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="warning">Warning</Label>
                    <div className="flex gap-2">
                      <Input
                        id="warning"
                        value={tempColors.warning}
                        onChange={(e) => handleColorChange('warning', e.target.value)}
                        placeholder="38 92% 50%"
                      />
                      <div 
                        className="w-10 h-10 rounded border"
                        style={{ backgroundColor: `hsl(${tempColors.warning})` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="destructive">Error/Destructive</Label>
                    <div className="flex gap-2">
                      <Input
                        id="destructive"
                        value={tempColors.destructive}
                        onChange={(e) => handleColorChange('destructive', e.target.value)}
                        placeholder="0 84% 60%"
                      />
                      <div 
                        className="w-10 h-10 rounded border"
                        style={{ backgroundColor: `hsl(${tempColors.destructive})` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Background Colors</CardTitle>
                  <CardDescription>Background and surface colors</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="background">Background</Label>
                    <div className="flex gap-2">
                      <Input
                        id="background"
                        value={tempColors.background}
                        onChange={(e) => handleColorChange('background', e.target.value)}
                        placeholder="0 0% 100%"
                      />
                      <div 
                        className="w-10 h-10 rounded border"
                        style={{ backgroundColor: `hsl(${tempColors.background})` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="card">Card</Label>
                    <div className="flex gap-2">
                      <Input
                        id="card"
                        value={tempColors.card}
                        onChange={(e) => handleColorChange('card', e.target.value)}
                        placeholder="0 0% 100%"
                      />
                      <div 
                        className="w-10 h-10 rounded border"
                        style={{ backgroundColor: `hsl(${tempColors.card})` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="surface">Surface</Label>
                    <div className="flex gap-2">
                      <Input
                        id="surface"
                        value={tempColors.surface}
                        onChange={(e) => handleColorChange('surface', e.target.value)}
                        placeholder="220 14.3% 95.9%"
                      />
                      <div 
                        className="w-10 h-10 rounded border"
                        style={{ backgroundColor: `hsl(${tempColors.surface})` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Text Colors</CardTitle>
                  <CardDescription>Foreground and text colors</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="foreground">Foreground</Label>
                    <div className="flex gap-2">
                      <Input
                        id="foreground"
                        value={tempColors.foreground}
                        onChange={(e) => handleColorChange('foreground', e.target.value)}
                        placeholder="222.2 84% 4.9%"
                      />
                      <div 
                        className="w-10 h-10 rounded border"
                        style={{ backgroundColor: `hsl(${tempColors.foreground})` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="muted">Muted</Label>
                    <div className="flex gap-2">
                      <Input
                        id="muted"
                        value={tempColors.muted}
                        onChange={(e) => handleColorChange('muted', e.target.value)}
                        placeholder="210 40% 96%"
                      />
                      <div 
                        className="w-10 h-10 rounded border"
                        style={{ backgroundColor: `hsl(${tempColors.muted})` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mutedForeground">Muted Foreground</Label>
                    <div className="flex gap-2">
                      <Input
                        id="mutedForeground"
                        value={tempColors.mutedForeground}
                        onChange={(e) => handleColorChange('mutedForeground', e.target.value)}
                        placeholder="215.4 16.3% 46.9%"
                      />
                      <div 
                        className="w-10 h-10 rounded border"
                        style={{ backgroundColor: `hsl(${tempColors.mutedForeground})` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="presets" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Color Presets</CardTitle>
                <CardDescription>Quick theme presets to get started</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {colorPresets.map((preset) => (
                    <div
                      key={preset.name}
                      className="p-4 border rounded-lg space-y-3 hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => applyPreset(preset)}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{preset.name}</h4>
                        <Badge variant="secondary">Apply</Badge>
                      </div>
                      <div className="flex gap-2">
                        {Object.entries(preset.colors).map(([key, value]) => (
                          <div
                            key={key}
                            className="w-8 h-8 rounded border"
                            style={{ backgroundColor: `hsl(${value})` }}
                            title={key}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-6" />
                
                <div className="text-sm text-muted-foreground">
                  <p><strong>Tip:</strong> Click on any preset to apply it immediately. You can then fine-tune the colors in the Colors tab.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}