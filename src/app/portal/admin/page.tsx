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

type Student = {
  id: string;
  name: string;
  email: string;
  status: "verified" | "unverified";
};

const initialStudents: Student[] = [
  { id: "1", name: "John Doe", email: "john.d@example.com", status: "unverified" },
  { id: "2", name: "Jane Smith", email: "jane.s@example.com", status: "unverified" },
  { id: "3", name: "Mike Johnson", email: "mike.j@example.com", status: "verified" },
  { id: "4", name: "Emily Davis", email: "emily.d@example.com", status: "unverified" },
];

export default function AdminDashboard() {
  const [students, setStudents] = React.useState<Student[]>(initialStudents);
  const { toast } = useToast();

  const handleVerification = (studentId: string) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId ? { ...student, status: "verified" } : student
      )
    );
    const student = students.find(s => s.id === studentId);
    toast({
      title: "Student Verified",
      description: `${student?.name} has been successfully verified.`,
    });
  };
  
  const unverifiedStudents = students.filter(s => s.status === 'unverified');

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
              {unverifiedStudents.length > 0 ? (
                unverifiedStudents.map((student) => (
                  <TableRow key={student.id}>
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
                          onClick={() => handleVerification(student.id)}
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
