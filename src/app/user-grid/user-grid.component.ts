import { Component, OnInit } from '@angular/core';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';
import { HeaderComponent } from "../header/header.component";
import { UserService } from '../user-form/user.service';
import { User } from '../user-form/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-grid',
  standalone: true,
  imports: [AgGridModule, HeaderComponent],
  templateUrl: './user-grid.component.html',
  styleUrl: './user-grid.component.css'
})
export class UserGridComponent implements OnInit  {
constructor(private userService: UserService, private router: Router){}
 userGridList: User[]=[];
ngOnInit() {
   // Subscribe to the Observable to get both manual and fetched users
   this.userService.fetchUsers().subscribe(users => {
    this.userGridList = users;
    console.log('Users fetched and manual are', this.userGridList);
  });

}
  
ColDefs: ColDef[] =[
  {field: 'username',checkboxSelection:true},
  {field: 'email'},
  {field: 'phone'},
  {field: 'foodPreferences'},
  {field: 'country'}
]


// rowData: any[]=[
//   {
//     "email": "john.doe@example.com",
//     "phone": "9876543210",
//     "username": "johndoe",
//     "foodPreferences": ["Indian", "South-Indian"],
//     "country": "India"
//   },
//   {
//     "email": "jane.smith@example.com",
//     "phone": "8765432109",
//     "username": "janesmith",
//     "foodPreferences": ["Chinese", "Maharashtrian"],
//     "country": "USA"
//   },
//   { 
//     "email": "alice.jones@example.com",
//     "phone": "7654321098",
//     "username": "alicejones",
//     "foodPreferences": ["Punjabi", "Indian"],
//     "country": "Japan"
//   },
//   {
//     "email": "bob.wilson@example.com",
//     "phone": "6543210987",
//     "username": "bobwilson",
//     "foodPreferences": ["South-Indian", "Thai"],
//     "country": "Russia"
//   },
//   {
//     "email": "emily.brown@example.com",
//     "phone": "5432109876",
//     "username": "emilybrown",
//     "foodPreferences": ["Maharashtrian", "Chinese"],
//     "country": "China"
//   },
//   {
//     "email": "david.miller@example.com",
//     "phone": "4321098765",
//     "username": "davidmiller",
//     "foodPreferences": ["Indian", "Punjabi"],
//     "country": "England"
//   },
//   {
     
//     "email": "susan.clark@example.com",
//     "phone": "3210987654",
//     "username": "susanclark",
//     "foodPreferences": ["Chinese", "South-Indian"],
//     "country": "Australia"
//   },
//   {
    
//     "email": "michael.lewis@example.com",
//     "phone": "2109876543",
//     "username": "michaellewis",
//     "foodPreferences": ["Thai", "Maharashtrian"],
//     "country": "India"
//   },
//   {
    
//     "email": "linda.roberts@example.com",
//     "phone": "1098765432",
//     "username": "lindaroberts",
//     "foodPreferences": ["Indian", "Punjabi"],
//     "country": "USA"
//   },
//   {
   
//     "email": "chris.turner@example.com",
//     "phone": "1987654321",
//     "username": "christurner",
//     "foodPreferences": ["Thai", "South-Indian"],
//     "country": "Japan"
//   },
//   {
   
//     "email": "anna.hall@example.com",
//     "phone": "9876501234",
//     "username": "annahall",
//     "foodPreferences": ["Maharashtrian", "Indian"],
//     "country": "Russia"
//   },
//   {
    
//     "email": "mark.evans@example.com",
//     "phone": "8765401234",
//     "username": "markevans",
//     "foodPreferences": ["Punjabi", "Chinese"],
//     "country": "China"
//   },
//   {
    
//     "email": "nancy.scott@example.com",
//     "phone": "7654301234",
//     "username": "nancyscott",
//     "foodPreferences": ["South-Indian", "Thai"],
//     "country": "England"
//   },
//   {
    
//     "email": "paul.martin@example.com",
//     "phone": "6543201234",
//     "username": "paulmartin",
//     "foodPreferences": ["Indian", "Maharashtrian"],
//     "country": "Australia"
//   },
//   {
    
//     "email": "carol.white@example.com",
//     "phone": "5432101234",
//     "username": "carolwhite",
//     "foodPreferences": ["Chinese", "Punjabi"],
//     "country": "India"
//   },
//   {
    
//     "email": "thomas.harris@example.com",
//     "phone": "4321001234",
//     "username": "thomasharris",
//     "foodPreferences": ["Thai", "South-Indian"],
//     "country": "USA"
//   },
//   {
   
//     "email": "sarah.king@example.com",
//     "phone": "3210001234",
//     "username": "sarahking",
//     "foodPreferences": ["Maharashtrian", "Indian"],
//     "country": "Japan"
//   },
//   {
    
//     "email": "peter.moore@example.com",
//     "phone": "2100001234",
//     "username": "petermoore",
//     "foodPreferences": ["Punjabi", "Chinese"],
//     "country": "Russia"
//   },
//   {
    
//     "email": "jessica.taylor@example.com",
//     "phone": "1090001234",
//     "username": "jessicataylor",
//     "foodPreferences": ["South-Indian", "Thai"],
//     "country": "China"
//   },
//   {
    
//     "email": "daniel.anderson@example.com",
//     "phone": "1980001234",
//     "username": "danielanderson",
//     "foodPreferences": ["Indian", "Maharashtrian"],
//     "country": "England"
//   }
// ]
defaultColDef: ColDef= {
  sortable: true,
  filter: true,
  flex: 1
}
paginationPageSize=10;

onCellClickedEvent(event: CellClickedEvent)
{
  console.log(event.data);
}

 // Event handler for row selection change (checkbox selection)
 onSelectionChanged(event: any) {
  const selectedNodes = event.api.getSelectedNodes(); // Get selected rows
  const selectedData = selectedNodes.map((node: { data: any; }) => node.data); // Extract data of selected rows
  console.log("Selected Data: ", selectedData); // Log the selected row data
}

 // Method to navigate to the create user form
 goToCreateUser() {
  this.router.navigate(['/user-form']);
}
}
