// import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
// import { AllModulesService } from "../../all-modules.service";
// import {
//   FormBuilder,
//   FormGroup,
//   FormControl,
//   Validators,
// } from "@angular/forms";
// import { ToastrService } from "ngx-toastr";
// import { Subject } from "rxjs";
// import { DataTableDirective } from "angular-datatables";

// import { AuthService } from "src/app/shared/services/auth.service";
// import { environment } from '../../../../environments/environment';
// import { HttpClient } from "@angular/common/http";
// import { CookieService } from "ngx-cookie-service";
// import { saveAs } from "file-saver/dist/FileSaver"


// declare const $: any;
// @Component({
//   selector: "app-policies-content",
//   templateUrl: "./policies-content.component.html",
//   styleUrls: ["./policies-content.component.css"],
// })
// export class PoliciesContentComponent implements OnInit, OnDestroy {
//   @ViewChild(DataTableDirective, { static: false })
//   public dtElement: DataTableDirective;
//   public dtOptions: DataTables.Settings = {};
//   public dtTrigger: Subject<any> = new Subject();
//   public url: any = "policies";
//   public allPolicies: any = [];
//   public addPolicies: FormGroup;
//   public editPolicies: FormGroup;
//   public editId: any;
//   public tempId: any;
//   public modifiedID;

//   policy;
//   policyUrl = environment.imageUrl;
//   developer_type: string;
//   developer_uuid: string;
//   // setEditPolicy: any;

//   addPolicy_selected;  //add policy name 
//   editpolicyname;      //edit policy name 
//   editpolicy_file;     //edit policy file

//   modifiedDates;

//   editPolicyModal = false;

//   clearfile;

//   constructor(
//     private allModuleService: AllModulesService,
//     private formBuilder: FormBuilder,
//     private toastr: ToastrService,
//     private auth: AuthService,
//     private http: HttpClient,
//     private cookieService: CookieService
//   ) { }

//   ngOnInit() {

//     this.developer_type = this.cookieService.get('type');
//     this.developer_uuid = this.cookieService.get('emp_id');

//     console.log("developer type", this.developer_type);
//     this.getPolicies();

//     // Add Provident Form Validation And Getting Values

//     this.addPolicies = this.formBuilder.group({
//       addPolicyName: ["", [Validators.required]],
//       addDepartment: ["", [Validators.required]],
//       // addDescription: ["", [Validators.required]],
//     });

//     // Edit Provident Form Validation And Getting Values

//     this.editPolicies = this.formBuilder.group({
//       editPolicyName: ["", [Validators.required]],
//       editDepartment: ["", [Validators.required]],
//       // editDescription: ["", [Validators.required]],
//     });
//     // for data table configuration
//     this.dtOptions = {
//       // ... skipped ...
//       pageLength: 10,
//       dom: "lrtip",
//     };
//   }

//   getPolicies() {
//     // this.allModuleService.get(this.url).subscribe((data) => {
//     //   this.allPolicies = data;
//     //   this.dtTrigger.next();
//     // });

//     this.auth.get_policy().subscribe((data) => {
//       console.log("get policy", data);
//       data.sort((a, b) => (a.id < b.id) ? 1 : -1)
//       this.allPolicies = data;
//       console.log("all policies", this.allPolicies);
//       this.dtTrigger.next();
//     });
//   }

//   // Add Provident Modal Api Call
//   @ViewChild('editPolicyFile') fileInput: any;
//   policyUpload(event, value) {
//     console.log("value", value);

//     let fileSelected = event.target.files[0];
//     let fileName = event.target.files[0].name;
//     console.log(fileName)

//     if (value === 'edit') {
//       // alert("here")
//       this.editpolicyname = fileName;
//       this.policy = fileSelected;
//       this.fileInput.nativeElement.value = '';

//     } else {
//       // console.log("file", file);
//       this.policy = fileSelected;   //file
//       this.addPolicy_selected = fileName;  //file name
//     }

//   }

//   addPoliciesSubmit() {
//     console.log("add policies submit", this.addPolicies);

//     if (this.addPolicies.valid) {
//       let obj = {
//         policyName: this.addPolicies.value.addPolicyName,
//         department: this.addPolicies.value.addDepartment,
//         // description: this.addPolicies.value.addDescription,
//         // createdDate: "20 Feb 2019",
//       };

//       let formData = new FormData();

//       formData.append("name", obj.policyName);
//       formData.append("applicable_for", obj.department);

//       if (this.policy) {
//         formData.append("policy", this.policy);
//         console.log("form data", formData);
//       }

//       this.auth.add_policy(formData).subscribe((data: any) => {
//         console.log(data);
//         // this.auth.getDataRequest(this.projectId).subscribe((data:any)=>{
//         //   console.log('response -->',data);
//         //   this.dataReqs = data;
//         //   this.rerender();
//         // })
//       })


//       // this.allModuleService.add(obj, this.url).subscribe((data) => {
//       //   this.allPolicies.push(data);
//       //   this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
//       //     dtInstance.destroy();
//       //   });
//       // });

//       this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
//         dtInstance.destroy();
//       });
//       this.getPolicies();
//       $("#add_policy").modal("hide");
//       this.addPolicies.reset();
//       this.toastr.success("Policy is added", "Success");
//     }
//   }

//   // Edit Provident Modal Api Call


//   editPoliciesSubmit() {
//     console.log("edit policy submit", this.editPolicies.value, this.editId);
//     let obj = {
//       // id: this.editId,
//       policyName: this.editPolicies.value.editPolicyName,
//       department: this.editPolicies.value.editDepartment,
//       // description: this.editPolicies.value.editDescription,
//       // createdDate: "20 Feb 2019",
//       // id: this.editId,

//     };
//     // this.allModuleService.update(obj, this.url).subscribe((data1) => {
//     //   this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
//     //     dtInstance.destroy();
//     //   });
//     // });



//     let formData = new FormData()

//     // formData.append("id", obj.id);
//     formData.append("name", obj.policyName);
//     formData.append("applicable_for", obj.department);

//     if (this.policy) {
//       formData.append("policy", this.policy);
//       console.log("form data", formData);
//     }

//     this.auth.edit_policy(this.editId, formData).subscribe((data: any) => {
//       console.log("edit_policy", data);
//       // this.auth.getDataRequest(this.projectId).subscribe((data:any)=>{
//       //   console.log('response -->',data);
//       //   this.dataReqs = data;
//       //   this.rerender();
//       // })

//       this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
//         dtInstance.destroy();
//       })
//       this.getPolicies();
//       $("#edit_policy").modal("hide");
//       this.toastr.success("Policy is edited", "Success");
//     })


//   }

//   edit(value) {
//     this.editPolicyModal = false;
//     this.clearfile = "";
//     this.editId = value;
//     this.editPolicyModal = true;

//     this.editpolicyname = null;
//     console.log("edit id", this.editId);
//     const index = this.allPolicies.findIndex((item) => {
//       return item.id === value;
//     });
//     let toSetValues = this.allPolicies[index];
//     console.log("set values", toSetValues);
//     this.editPolicies.setValue({
//       editPolicyName: toSetValues.name,
//       editDepartment: toSetValues.applicable_for,
//       // editDescription: toSetValues.description,
//     });
//     this.editpolicy_file = this.policyUrl + toSetValues.policy;
//     this.editpolicyname = toSetValues.policy.split("/")[3];  //get file name
//     // console.log("set edit policy", this.setEditPolicy);
//   }



//   // Delete Provident Modal Api Call
//   deleteID = 0;
//   deletePolicies() {
//     // this.allModuleService.delete(this.tempId, this.url).subscribe((data) => {
//     //   this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
//     //     dtInstance.destroy();
//     //   });
//     this.auth.delete_policy(this.deleteID).subscribe((data: any) => {
//       console.log("edit_policy", data);
//       // this.auth.getDataRequest(this.projectId).subscribe((data:any)=>{
//       //   console.log('response -->',data);
//       //   this.dataReqs = data;
//       //   this.rerender();
//       // })

//       this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
//         dtInstance.destroy();
//       })
//       this.getPolicies();
//       $("#delete_policy").modal("hide");
//       this.toastr.success("Policy is deleted", "Success");
//     });
//   }


//   mediaUrl = environment.imageUrl


//   downloadFile(policyUrl, name) {
//     console.log(this.mediaUrl + policyUrl)
//     console.log(name)
//     let url = this.mediaUrl + policyUrl
//     this.auth.getFile(url).subscribe(
//       file => {
//         // const blob = new Blob([file])
//         saveAs(file, name)
//       }
//     )
//     // console.log("file",typeof file, fileId);
//     // let fileData = new Blob(policyUrl+policy, {type: "application/pdf"});
//     // fileId.href = URL.createObjectURL(fileData);
//     // fileId.download = "filename.pdf";

//     // fileId.download = "filename";
//     // fileId.href = policyUrl+policy;
//     // fileId.click();




//     //   const fileName = 'Patient Report';
//     // const a = document.createElement('a');
//     // document.body.appendChild(a);
//     // a.href = policyUrl+policy;
//     // a.download = fileName;
//     // a.click();
//     // a.remove(); 

//   }

//   modifiedOn(id) {
//     console.log("modified on", id);
//     this.auth.get_policy_creation(id).subscribe((data: any) => {
//       console.log("modified on", data);

//       this.modifiedDates = data.modified_on;
//       //   this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
//       //     dtInstance.destroy();
//       //   })
//       //   this.getPolicies();
//       //   $("#edit_policy").modal("hide");
//       //   this.toastr.success("Policy is edited", "Success");
//     })
//   }

//   // policyFileName(file){
//   //   console.log("policy file name", file[0].name);
//   // }

//   ngOnDestroy(): void {
//     // Do not forget to unsubscribe the event
//     this.dtTrigger.unsubscribe();
//   }
// }
