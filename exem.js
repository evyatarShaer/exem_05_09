let militaryUnit = {

    name: "1st Infantry Division",
  
    location: "Fort Bragg, North Carolina, USA",
  
    establishmentDate: "1941-06-01",
  
    unitType: "Infantry Division",
  
    commandStructure: {
  
      commandingOfficer: {
  
        rank: "Major General",
  
        name: "John Doe",
  
        contact: {
  
          email: "john.doe@example.com",
  
          phone: "+1-555-123-4567",
  
        },
  
      },
  
      executiveOfficer: {
  
        rank: "Colonel",
  
        name: "Jane Smith",
  
        contact: {
  
          email: "jane.smith@example.com",
  
          phone: "+1-555-987-6543",
  
        },
  
      },
  
      chiefOfStaff: {
  
        rank: "Brigadier General",
  
        name: "Robert Brown",
  
        contact: {
  
          email: "robert.brown@example.com",
  
          phone: "+1-555-555-1234",
  
        },
  
      },
  
    },
  
    personnel: [
  
      {
  
        id: 1,
  
        name: "Private First Class Alice Johnson",
  
        rank: "Private First Class",
  
        role: "Rifleman",
  
        contact: {
  
          email: "alice.johnson@example.com",
  
          phone: "+1-555-000-1111",
  
        },
  
      },
  
      {
  
        id: 2,
  
        name: "Sergeant Michael White",
  
        rank: "Sergeant",
  
        role: "Squad Leader",
  
        contact: {
  
          email: "michael.white@example.com",
  
          phone: "+1-555-000-2222",
  
        },
  
      },
  
    ],
  
    equipment: {
  
      vehicles: [
  
        {
  
          type: "M1 Abrams Tank",
  
          quantity: 20,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Humvee",
  
          quantity: 50,
  
          status: "Operational",
  
        },
  
      ],
  
      firearms: [
  
        {
  
          type: "M16 Rifle",
  
          quantity: 500,
  
          status: "Operational",
  
        },
  
        {
  
          type: "M249 SAW",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
      otherEquipment: [
  
        {
  
          type: "Night Vision Goggles",
  
          quantity: 150,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Field Radios",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
    },
  
    missions: [
  
      {
  
        missionName: "Operation Desert Storm",
  
        startDate: "1991-01-17",
  
        endDate: "1991-02-28",
  
        description: "Combat operation to liberate Kuwait from Iraqi occupation.",
  
      },
  
      {
  
        missionName: "Operation Enduring Freedom",
  
        startDate: "2001-10-07",
  
        endDate: "2014-12-28",
  
        description:
  
          "Military operations aimed at dismantling al-Qaeda and removing the Taliban from power in Afghanistan.",
  
      },
  
    ],
  
    trainingPrograms: [
  
      {
  
        programName: "Basic Combat Training",
  
        duration: 10,
  
        focus:
  
          "Fundamentals of soldiering, physical conditioning, and basic combat skills.",
  
      },
  
      {
  
        programName: "Advanced Individual Training",
  
        duration: 12,
  
        focus:
  
          "Specialized training for specific military occupational specialties.",
  
      },
  
    ],
  
    history: [
  
      {
  
        eventDate: "1941-06-01",
  
        eventDescription: "Establishment of the 1st Infantry Division.",
  
      },
  
      {
  
        eventDate: "1944-06-06",
  
        eventDescription: "Participated in the D-Day landings in Normandy.",
  
      },
  
    ],
  
    currentDeployment: {
  
      location: "Middle East",
  
      mission: "Counter-terrorism operations",
  
      startDate: "2024-01-01",
  
      estimatedEndDate: "2024-12-31",
  
    },
  
  };





//1
function mission1(militaryUnit) 
{
    const chiefOfStaff = militaryUnit.commandStructure.chiefOfStaff
    return { rank: chiefOfStaff.rank, name: chiefOfStaff.name, phoneNumber: chiefOfStaff.contact.phone};
}



//2
function mission2(militaryUnit) 
{
    return militaryUnit.personnel.length;
}




//3
function mission3(militaryUnit, NewDeployment) 
{
    const histiory = {
        eventDate: militaryUnit.currentDeployment.estimatedEndDate,
        eventDescription: militaryUnit.currentDeployment.mission
    }
    militaryUnit.history.push(histiory)
    militaryUnit.currentDeployment = NewDeployment
    return militaryUnit
}




//4
function mission4(militaryUnit, newFirearms) 
{
    if (militaryUnit.equipment.firearms.type === newFirearms.type)
    {
        militaryUnit.equipment.firearms.quantity += newFirearms.quantity
        return militaryUnit
    }
    militaryUnit.equipment.firearms.push(newFirearms)
    return militaryUnit
}




//5
function mission5(militaryUnit) 
{
    let Quantity = 0
    for(let i = 0; i < militaryUnit.trainingPrograms.length; i++) {
      Quantity += militaryUnit.trainingPrograms[i].duration
    }
    return Quantity
}




console.log(mission1(militaryUnit));

console.log(mission2(militaryUnit));

const NewDeployment = { location: "gaza", mission: "count sinwar", startDate: "2023-10-07", estimatedEndDate: "2024-12-31"}
console.log(mission3(militaryUnit, NewDeployment));

const newFirearms = { type: "M16 Rifle", quantity: 200, status: "Operational" }
const newFirearms2 = { type: "M249 SAW", quantity: 1, status: "Operational" }
console.log(mission4(militaryUnit, newFirearms));

console.log(mission5(militaryUnit));


module.exports = {
     mission1,
     mission2,
     mission3, 
     mission4, 
     mission5 
};
