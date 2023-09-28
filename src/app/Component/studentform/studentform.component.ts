import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements AfterViewInit {

  displayedColumns: string[] = ["id", "name", "gender", "mobile", "batch", "district", "state", "location", "package", "action"];

  dataSource = new MatTableDataSource<any>();
  term: string = "";

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private studentService: StudentService, private router:Router) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadStudentData();
  }

  applyFilter() {
    this.dataSource.filter = this.term.trim().toLowerCase();
  }

  loadStudentData() {
    this.studentService.getstudent().subscribe(
      (data: any) => {
        this.dataSource.data = data;
      },
      (err: any) => {
        alert("Internal Service Error");
      }
    );
  }
  delete(id:any){
    this.studentService.deleteStudent(id).subscribe(
      (data:any)=>{
        alert("Delete Successfully");
        location.reload();
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  view(id:number){
     this.router.navigateByUrl("/menubar/studentdetails" +id);
  }

  edit(id:number){
    this.router.navigateByUrl("/dashboard/editstudent" +id);
 }
}
