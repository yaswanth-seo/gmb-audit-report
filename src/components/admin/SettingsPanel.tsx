import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Save, Mail, Shield, Settings as SettingsIcon } from "lucide-react";

export const SettingsPanel = () => {
  return (
    <div className="space-y-6">
      {/* System Settings */}
      <Card className="p-6 bg-slate-800/50 border-slate-700 overflow-hidden">
        <div className="flex items-center gap-2 mb-6">
          <SettingsIcon className="h-5 w-5 text-blue-500" />
          <h3 className="text-lg font-bold text-white">System Configuration</h3>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="defaultCredits" className="text-slate-300">
                Default Credits per New User
              </Label>
              <Input
                id="defaultCredits"
                type="number"
                defaultValue="100"
                className="bg-slate-900 border-slate-700 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxCredits" className="text-slate-300">
                Maximum Credits per User
              </Label>
              <Input
                id="maxCredits"
                type="number"
                defaultValue="1000"
                className="bg-slate-900 border-slate-700 text-white"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-slate-300">Maintenance Mode</Label>
              <p className="text-sm text-slate-500">Temporarily disable report generation</p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-slate-300">Email Notifications</Label>
              <p className="text-sm text-slate-500">Send email when reports are ready</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="space-y-2">
            <Label htmlFor="rateLimit" className="text-slate-300">
              Rate Limit (requests per hour)
            </Label>
            <Input
              id="rateLimit"
              type="number"
              defaultValue="60"
              className="bg-slate-900 border-slate-700 text-white"
            />
          </div>

          <Button className="w-full md:w-auto gap-2">
            <Save className="h-4 w-4" />
            Save System Settings
          </Button>
        </div>
      </Card>

      {/* Email Configuration */}
      <Card className="p-6 bg-slate-800/50 border-slate-700 overflow-hidden">
        <div className="flex items-center gap-2 mb-6">
          <Mail className="h-5 w-5 text-green-500" />
          <h3 className="text-lg font-bold text-white">Email Configuration</h3>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="smtpHost" className="text-slate-300">
              SMTP Host
            </Label>
            <Input
              id="smtpHost"
              placeholder="smtp.example.com"
              className="bg-slate-900 border-slate-700 text-white"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="smtpPort" className="text-slate-300">
                SMTP Port
              </Label>
              <Input
                id="smtpPort"
                type="number"
                defaultValue="587"
                className="bg-slate-900 border-slate-700 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="smtpUser" className="text-slate-300">
                SMTP Username
              </Label>
              <Input
                id="smtpUser"
                placeholder="username@example.com"
                className="bg-slate-900 border-slate-700 text-white"
              />
            </div>
          </div>
          <Button className="w-full md:w-auto gap-2">
            <Save className="h-4 w-4" />
            Save Email Settings
          </Button>
        </div>
      </Card>

      {/* Security Settings */}
      <Card className="p-6 bg-slate-800/50 border-slate-700 overflow-hidden">
        <div className="flex items-center gap-2 mb-6">
          <Shield className="h-5 w-5 text-amber-500" />
          <h3 className="text-lg font-bold text-white">Security Settings</h3>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="loginAttempts" className="text-slate-300">
              Failed Login Attempts Threshold
            </Label>
            <Input
              id="loginAttempts"
              type="number"
              defaultValue="5"
              className="bg-slate-900 border-slate-700 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sessionTimeout" className="text-slate-300">
              Session Timeout (minutes)
            </Label>
            <Input
              id="sessionTimeout"
              type="number"
              defaultValue="60"
              className="bg-slate-900 border-slate-700 text-white"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-slate-300">Two-Factor Authentication</Label>
              <p className="text-sm text-slate-500">Require 2FA for admin access</p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator className="bg-slate-700" />

          <div className="space-y-2">
            <Label className="text-slate-300">IP Whitelist</Label>
            <Input
              placeholder="192.168.1.1, 192.168.1.2"
              className="bg-slate-900 border-slate-700 text-white"
            />
            <p className="text-sm text-slate-500">Comma-separated IP addresses</p>
          </div>

          <Button className="w-full md:w-auto gap-2">
            <Save className="h-4 w-4" />
            Save Security Settings
          </Button>
        </div>
      </Card>
    </div>
  );
};
