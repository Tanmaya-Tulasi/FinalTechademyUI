export interface RequestLeave
{
    leaveID : number,
    employeeID : number,
    leaveType : string,
    when : Date,
    leaveReason : string,
    leaveStatus : string
}