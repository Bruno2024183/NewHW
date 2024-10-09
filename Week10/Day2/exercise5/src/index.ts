// Define the User interface with readonly and mandatory properties
interface User {
    readonly id: number;
    name: string;
    email: string;
  }
  
  // Extend User interface to create PremiumUser with an optional property
  interface PremiumUser extends User {
    membershipLevel?: string;
  }
  
  // Function to print the details of a PremiumUser
  function printUserDetails(user: PremiumUser): void {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    
    if (user.membershipLevel) {
      console.log(`Membership Level: ${user.membershipLevel}`);
    } else {
      console.log('Membership Level: Not provided');
    }
  }
  
  // Example usage:
  
  // Create a PremiumUser object
  const premiumUser: PremiumUser = {
    id: 101,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    membershipLevel: 'Gold'
  };
  
  // Create a PremiumUser without membership level
  const regularUser: PremiumUser = {
    id: 102,
    name: 'Bob Smith',
    email: 'bob@example.com'
  };
  
  // Print user details
  printUserDetails(premiumUser);
  printUserDetails(regularUser);