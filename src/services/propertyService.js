const API_URL = "https://property-api-blush.vercel.app/api";

export const propertyService = {
  /**
   * Get all properties
   * @returns {Promise<Array>} List of properties
   */
  getAllProperties: async () => {
    try {
      const response = await fetch(`${API_URL}/properti`);
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error("❌ Error getting properties:", error);
      throw new Error(`Gagal mengambil data properti: ${error.message}`);
    }
  },

  /**
   * Get single property by ID
   * @param {string} id - Property ID
   * @returns {Promise<Object>} Property data
   */
  getPropertyById: async (id) => {
    try {
      const response = await fetch(`${API_URL}/properti/${id}`);
      if (!response.ok) {
        throw new Error("Properti tidak ditemukan");
      }
      return await response.json();
    } catch (error) {
      console.error("❌ Error getting property:", error);
      throw error;
    }
  },

  /**
   * Create new property
   * @param {Object} propertyData - Property data
   * @returns {Promise<Object>} Created property with ID
   */
  createProperty: async (propertyData) => {
    try {
      // Validate required fields
      if (
        !propertyData.nama ||
        !propertyData.lokasi ||
        !propertyData.harga_per_bulan
      ) {
        throw new Error("Nama, lokasi, dan harga wajib diisi");
      }

      const response = await fetch(`${API_URL}/properti`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(propertyData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Gagal membuat properti");
      }

      const result = await response.json();
      console.log("✅ Property created:", result);
      return result;
    } catch (error) {
      console.error("❌ Error creating property:", error);
      throw error;
    }
  },

  /**
   * Update existing property
   * @param {string} id - Property ID
   * @param {Object} propertyData - Updated property data
   * @returns {Promise<Object>} Updated property
   */
  updateProperty: async (id, propertyData) => {
    try {
      const response = await fetch(`${API_URL}/properti/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(propertyData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Gagal mengupdate properti");
      }

      const result = await response.json();
      console.log("✅ Property updated:", result);
      return result;
    } catch (error) {
      console.error("❌ Error updating property:", error);
      throw error;
    }
  },

  /**
   * Delete property
   * @param {string} id - Property ID
   * @returns {Promise<Object>} Deletion result
   */
  deleteProperty: async (id) => {
    try {
      const response = await fetch(`${API_URL}/properti/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Gagal menghapus properti");
      }

      const result = await response.json();
      console.log("✅ Property deleted:", result);
      return result;
    } catch (error) {
      console.error("❌ Error deleting property:", error);
      throw error;
    }
  },

  /**
   * Search properties by name or location
   * @param {string} query - Search query
   * @returns {Promise<Array>} Filtered properties
   */
  searchProperties: async (query) => {
    try {
      const allProperties = await this.getAllProperties();
      return allProperties.filter(
        (p) =>
          p.nama?.toLowerCase().includes(query.toLowerCase()) ||
          p.lokasi?.toLowerCase().includes(query.toLowerCase())
      );
    } catch (error) {
      console.error("❌ Error searching properties:", error);
      throw error;
    }
  },

  /**
   * Get properties with pagination
   * @param {number} page - Page number
   * @param {number} limit - Items per page
   * @returns {Promise<Object>} Paginated results
   */
  getPropertiesPaginated: async (page = 1, limit = 10) => {
    try {
      const response = await fetch(
        `${API_URL}/properti?page=${page}&limit=${limit}`
      );
      if (!response.ok) {
        throw new Error("Gagal mengambil data");
      }
      return await response.json();
    } catch (error) {
      console.error("❌ Error getting paginated properties:", error);
      throw error;
    }
  },

  /**
   * Get properties by status
   * @param {string} status - Filter status
   * @returns {Promise<Array>} Filtered properties
   */
  getPropertiesByStatus: async (status) => {
    try {
      const allProperties = await this.getAllProperties();
      return allProperties.filter((p) => p.status === status);
    } catch (error) {
      console.error("❌ Error filtering by status:", error);
      throw error;
    }
  },
};

// ============= PAYMENT SERVICE (Optional) =============

export const paymentService = {
  /**
   * Get all payments
   * @returns {Promise<Array>} List of payments
   */
  getAllPayments: async () => {
    try {
      const response = await fetch(`${API_URL}/pembayaran`);
      if (!response.ok) throw new Error("Gagal mengambil data pembayaran");
      return await response.json();
    } catch (error) {
      console.error("❌ Error getting payments:", error);
      throw error;
    }
  },

  /**
   * Create new payment
   * @param {Object} paymentData - Payment data
   * @returns {Promise<Object>} Created payment
   */
  createPayment: async (paymentData) => {
    try {
      const response = await fetch(`${API_URL}/pembayaran`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentData),
      });

      if (!response.ok) throw new Error("Gagal membuat pembayaran");
      const result = await response.json();
      console.log("✅ Payment created:", result);
      return result;
    } catch (error) {
      console.error("❌ Error creating payment:", error);
      throw error;
    }
  },

  /**
   * Update payment status
   * @param {string} id - Payment ID
   * @param {Object} data - Status update data
   * @returns {Promise<Object>} Updated payment
   */
  updatePaymentStatus: async (id, data) => {
    try {
      const response = await fetch(`${API_URL}/pembayaran/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Gagal mengupdate pembayaran");
      const result = await response.json();
      console.log("✅ Payment updated:", result);
      return result;
    } catch (error) {
      console.error("❌ Error updating payment:", error);
      throw error;
    }
  },

  /**
   * Delete payment
   * @param {string} id - Payment ID
   * @returns {Promise<Object>} Deletion result
   */
  deletePayment: async (id) => {
    try {
      const response = await fetch(`${API_URL}/pembayaran/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Gagal menghapus pembayaran");
      const result = await response.json();
      console.log("✅ Payment deleted:", result);
      return result;
    } catch (error) {
      console.error("❌ Error deleting payment:", error);
      throw error;
    }
  },

  /**
   * Get payments by property ID
   * @param {string} propertyId - Property ID
   * @returns {Promise<Array>} Property payments
   */
  getPaymentsByProperty: async (propertyId) => {
    try {
      const response = await fetch(
        `${API_URL}/pembayaran?properti_id=${propertyId}`
      );
      if (!response.ok) throw new Error("Gagal mengambil pembayaran");
      return await response.json();
    } catch (error) {
      console.error("❌ Error getting property payments:", error);
      throw error;
    }
  },

  /**
   * Get payments by status
   * @param {string} status - Payment status
   * @returns {Promise<Array>} Filtered payments
   */
  getPaymentsByStatus: async (status) => {
    try {
      const response = await fetch(`${API_URL}/pembayaran?status=${status}`);
      if (!response.ok) throw new Error("Gagal mengambil pembayaran");
      return await response.json();
    } catch (error) {
      console.error("❌ Error getting payments by status:", error);
      throw error;
    }
  },
};

// ============= UTILITIES =============

/**
 * Format number to Rupiah currency
 * @param {number} number - Number to format
 * @returns {string} Formatted currency
 */
export const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

/**
 * Format date to Indonesian format
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/**
 * Check API connection
 * @returns {Promise<boolean>} True if API is reachable
 */
export const checkAPIConnection = async () => {
  try {
    const response = await fetch(`${API_URL.replace("/api", "")}/api/health`);
    return response.ok;
  } catch (error) {
    console.error("❌ API connection failed:", error);
    return false;
  }
};

export default {
  propertyService,
  paymentService,
  formatRupiah,
  formatDate,
  checkAPIConnection,
};
