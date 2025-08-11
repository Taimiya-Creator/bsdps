"use client"

import { Book, Calendar, CheckSquare, MessageSquare, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StudentDashboard() {
  const isVerified = true; // Mock verification status

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Student Portal</h1>
        {isVerified ? (
          <Badge variant="default">Verified</Badge>
        ) : (
          <Badge variant="destructive">Unverified</Badge>
        )}
      </div>

      {!isVerified && (
         <Card className="mb-8 bg-yellow-50 border-yellow-300">
          <CardHeader>
            <CardTitle>Account Pending Verification</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-yellow-800">Your account is currently awaiting verification from a school administrator. You will have limited access to portal features until your account is verified.</p>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">My Profile</CardTitle>
            <User className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
             <p className="text-xs text-muted-foreground">View and update your personal information.</p>
          </CardContent>
        </Card>
         <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Grades</CardTitle>
            <CheckSquare className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
             <p className="text-xs text-muted-foreground">Check your latest academic performance.</p>
          </CardContent>
        </Card>
         <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Assignments</CardTitle>
            <Book className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
             <p className="text-xs text-muted-foreground">Access your course assignments and deadlines.</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Events Calendar</CardTitle>
            <Calendar className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
             <p className="text-xs text-muted-foreground">Stay updated on school events and holidays.</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Messages</CardTitle>
            <MessageSquare className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
             <p className="text-xs text-muted-foreground">Communicate with teachers and staff.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
