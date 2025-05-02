
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+221 12 345 6789",
    address: "123 Main St, Dakar",
    contractNumber: "SN-2023-45678",
    contractType: "Residential",
  });

  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [notification, setNotification] = useState({
    emailNotifications: true,
    smsNotifications: true,
    appNotifications: false,
  });

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your profile information has been updated successfully.",
    });
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password.new !== password.confirm) {
      toast({
        title: "Password Mismatch",
        description: "New password and confirmation do not match.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Password Changed",
      description: "Your password has been changed successfully.",
    });
    
    setPassword({
      current: "",
      new: "",
      confirm: "",
    });
  };

  const handleNotificationChange = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Notification Settings Updated",
      description: "Your notification preferences have been saved.",
    });
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>

        <Tabs defaultValue="personalInfo" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="personalInfo">Personal Information</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="personalInfo">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileUpdate} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input 
                        id="fullName" 
                        value={profileData.fullName}
                        onChange={(e) => setProfileData({...profileData, fullName: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input 
                        id="address" 
                        value={profileData.address}
                        onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contractNumber">Contract Number</Label>
                      <Input 
                        id="contractNumber" 
                        value={profileData.contractNumber}
                        onChange={(e) => setProfileData({...profileData, contractNumber: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contractType">Contract Type</Label>
                      <select
                        id="contractType"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        value={profileData.contractType}
                        onChange={(e) => setProfileData({...profileData, contractType: e.target.value})}
                      >
                        <option value="Residential">Residential</option>
                        <option value="Business">Business</option>
                        <option value="Industrial">Industrial</option>
                      </select>
                    </div>
                  </div>
                  <Button type="submit" className="mt-4">Save Changes</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePasswordChange} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input 
                      id="currentPassword" 
                      type="password"
                      value={password.current}
                      onChange={(e) => setPassword({...password, current: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input 
                      id="newPassword" 
                      type="password"
                      value={password.new}
                      onChange={(e) => setPassword({...password, new: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input 
                      id="confirmPassword" 
                      type="password"
                      value={password.confirm}
                      onChange={(e) => setPassword({...password, confirm: e.target.value})}
                    />
                  </div>
                  <Button type="submit">Update Password</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleNotificationChange} className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="emailNotifications"
                      checked={notification.emailNotifications}
                      onChange={(e) => setNotification({...notification, emailNotifications: e.target.checked})}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <Label htmlFor="emailNotifications">
                      Receive notifications via email
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="smsNotifications"
                      checked={notification.smsNotifications}
                      onChange={(e) => setNotification({...notification, smsNotifications: e.target.checked})}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <Label htmlFor="smsNotifications">
                      Receive notifications via SMS
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="appNotifications"
                      checked={notification.appNotifications}
                      onChange={(e) => setNotification({...notification, appNotifications: e.target.checked})}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <Label htmlFor="appNotifications">
                      Receive in-app notifications
                    </Label>
                  </div>
                  <Button type="submit">Save Preferences</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Profile;
