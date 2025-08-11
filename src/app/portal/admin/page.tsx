"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

type Student = {
  _id: string;
  name: string;
  email: string;
  status: "verified" | "unverified";
};

const mockStudents: Student[] = [
  { _id: "1", name: "John Doe", email: "john@example.com", status: "unverified" },
  { _id: "2", name: "Jane Smith", email: "jane@example.com", status: "unverified" },
];

export default function AdminDashboard() {
  const [students, setStudents] = React.useState<Student[]>([]);
  const [loading, setLoading] = React.useState(true);
  const { toast } = useToast();

  const fetchPendingStudents = React.useCallback(async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setStudents(mockStudents.filter(s => s.status === 'unverified'));
      setLoading(false);
    }, 1000);
  }, []);

  React.useEffect(() => {
    fetchPendingStudents();
  }, [fetchPendingStudents]);

  const handleVerification = async (studentId: string) => {
    // Mock verification
    const student = students.find(s => s._id === studentId);
    toast({
      title: "Student Verified",
      description: `${student?.name} has been successfully verified.`,
    });
    setStudents(prev => prev.filter(s => s._id !== studentId));
  };
  
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Pending Verifications</CardTitle>
          <CardDescription>
            The following students have created an account and are awaiting verification.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                Array.from({length: 3}).map((_, i) => (
                   <TableRow key={i}>
                      <TableCell><Skeleton className="h-5 w-32" /></TableCell>
                      <TableCell><Skeleton className="h-5 w-48" /></TableCell>
                      <TableCell><Skeleton className="h-6 w-20 rounded-full" /></TableCell>
                      <TableCell className="text-right"><Skeleton className="h-8 w-16" /></TableCell>
                   </TableRow>
                ))
              ) : students.length > 0 ? (
                students.map((student) => (
                  <TableRow key={student._id}>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>
                      <Badge variant={student.status === 'verified' ? 'default' : 'secondary'}>
                        {student.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      {student.status === "unverified" && (
                        <Button
                          size="sm"
                          onClick={() => handleVerification(student._id)}
                        >
                          Verify
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                 <TableRow>
                    <TableCell colSpan={4} className="text-center h-24">
                      No students pending verification.
                    </TableCell>
                  </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
