export const formatCurrency = (amount) => {
    return `₹${Number(amount).toLocaleString("en-IN")}`;
  };
  
  export const calculateTripDays = (
    startDate,
    endDate
  ) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    const difference =
      Math.abs(end - start);
  
    return Math.ceil(
      difference / (1000 * 60 * 60 * 24)
    ) + 1;
  };
  
  export const getGreeting = () => {
    const hour = new Date().getHours();
  
    if (hour < 12) {
      return "Good Morning";
    }
  
    if (hour < 18) {
      return "Good Afternoon";
    }
  
    return "Good Evening";
  };