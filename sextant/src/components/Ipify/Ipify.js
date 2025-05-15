
export async function fetchIPv4() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    if (!response.ok) {
      throw new Error("Failed to fetch IP address");
    }
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Error fetching IPv6 address:", error);
    return null;
  }
}

export async function fetchIPv6() {
  {
    try {
      const response = await fetch("https://api64.ipify.org?format=json");
      if (!response.ok) {
        throw new Error("Failed to fetch IP address");
      }
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error("Error fetching IPv6 address:", error);
      return null;
    }
  }
};




