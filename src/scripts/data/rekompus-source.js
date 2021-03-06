import swal from 'sweetalert';
import API_ENDPOINT from '../globals/api-endpoint';
import { getCookie } from '../utils/cookie';

class RekompusSource {
  static async registerUser(data) {
    try {
      const response = await fetch(API_ENDPOINT.REGISTER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: JSON.stringify(data),
      });

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      swal({
        icon: 'warning',
        title: 'Error!',
        text: `Masalah yang terjadi adalah ${error.message}`,
      }).then(
        window.location.href = '/',
      );
    }
  }

  static async loginUser(data) {
    try {
      const response = await fetch(API_ENDPOINT.LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: JSON.stringify(data),
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      swal({
        icon: 'warning',
        title: 'Error!',
        text: `Masalah yang terjadi adalah ${error.message}`,
        timer: 2000,
      }).then(
        window.location.href = '/#/',
      );
    }
  }

  static async logoutUser() {
    try {
      const response = await fetch(API_ENDPOINT.LOGOUT, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${getCookie('jwt')}`,
          'Accept-Encoding': 'gzip, deflate, br',
        },
      });
      if (response.status === 500) {
        swal({
          icon: 'warning',
          title: 'Internal Server Error!',
          text: `Masalah yang terjadi adalah Internal Server Error, dengan response status code ${response.status} jika masalah masih belum segera terselesaikan. Hubungi admin rekompus.`,
        });
      }

      const responseJson = response.json();
      return responseJson;
    } catch (error) {
      swal({
        icon: 'warning',
        title: 'Internal Server Error!',
        text: `Masalah yang terjadi adalah ${message.error}, jika masalah masih belum segera terselesaikan. Hubungi admin rekompus.`,
      });
    }
  }

  static async aboutUser() {
    try {
      const response = await fetch(API_ENDPOINT.USER, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getCookie('jwt')}`,
          'Accept-Encoding': 'gzip, deflate, br',
        },
      });

      if (response.ok) {
        const responseJson = await response.json();
        return responseJson.data;
      }

      if (response.status === 401) {
        return response;
      }
    } catch (error) {
      swal({
        icon: 'error',
        title: 'Error',
        text: `Masalah yang terjadi adalah ${error.message}`,
      }).then(
        window.location.href = '/#/login',
      );
    }
  }

  static async getReview(id) {
    try {
      const response = await fetch(`${API_ENDPOINT.REVIEW}/${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getCookie('jwt')}`,
          'Accept-Encoding': 'gzip, deflate, br',
        },
      });
      if (response.ok) {
        const responseJson = await response.json();
        return responseJson.data;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async postReview(data) {
    try {
      const response = await fetch(API_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getCookie('jwt')}`,
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseJson = await response.json();
        return responseJson.data;
      }
      return response;
    } catch (error) {
      // swal({
      //   icon: 'error',
      //   title: 'Gagal!',
      //   text: 'Gagal menambahkan komentar!',
      //   timer: 2000,
      // });
    }
  }

  static async listKampus() {
    try {
      const response = await fetch(API_ENDPOINT.KAMPUS, {
        method: 'GET',
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
        },
      });

      if (response.ok) {
        const responseJson = await response.json();
        return responseJson.data;
      }

      if (response.status === 401) {
        swal({
          icon: 'warning',
          title: 'Unauthorized!',
          text: `Masalah yang terjadi adalah anda tidak memiliki akses pada halaman tersebut. Dengan response status code ${response.status}. Harap login terlebih dahulu!.`,
        }).then(
          window.location.href = '/#/login',
        );
      }

      if (response.status === 500) {
        swal({
          icon: 'warning',
          title: 'Internal Server Error!',
          text: `Masalah yang terjadi adalah internal server error. Dengan response status code ${response.status} Jika halaman masih belum dapat diakses harap hubungi admin rekompus.`,
        }).then(
          window.location.href = '/#/',
        );
      }
    } catch (error) {
      swal({
        icon: 'error',
        title: 'Error!',
        text: `Masalah yang terjadi adalah ${error.message}. Jika halaman masih belum dapat diakses harap hubungi admin rekompus.`,
      }).then(() => {
        console.log(error);
      });
    }
  }

  static async detailKampus(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL_KAMPUS(id), {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getCookie('jwt')}`,
          'Accept-Encoding': 'gzip, deflate, br',
        },
      });
      if (response.ok) {
        const responseJson = await response.json();
        return responseJson.data;
      }

      if (response.status === 401) {
        swal({
          icon: 'warning',
          title: 'Unauthorization!',
          text: 'Masalah yang terjadi adalah anda tidak memiliki akses halaman tersebut. Jika halaman masih belum dapat diakses harap hubungi admin rekompus.',
        }).then(
          window.location.href = '/#/login',
        );
      }

      if (response.status === 500) {
        swal({
          icon: 'warning',
          title: 'Internal server error!',
          text: 'Masalah yang terjadi adalah internal server error. Jika halaman masih belum dapat diakses harap hubungi admin rekompus.',
        }).then(
          window.location.href = '/#/',
        );
      }
    } catch (error) {
      swal({
        icon: 'warning',
        title: 'Data tidak tersedia',
        text: `Masalah yang terjadi adalah ${error.message}. Jika halaman masih belum dapat diakses harap hubungi admin rekompus.`,
      }).then(() => {
        console.log(error);
      });
    }
  }

  static async addKampus(data) {
    try {
      const response = await fetch(API_ENDPOINT.KAMPUS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getCookie('jwt')}`,
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const responseJson = await response.json();
        const { data: responseData } = responseJson;
        swal({
          icon: 'success',
          title: 'Berhasil',
          text: `Berhasil menambahkan kampus ${responseData.name}!`,
        }).then(() => {
          window.location.href = `/#/admin/${getCookie('email')}`;
        });
        return responseJson;
      }
    } catch (error) {
      swal({
        icon: 'error',
        title: 'Error!',
        text: `Masalah yang terjadi adalah ${error.message}. Jika halaman masih belum dapat diakses harap hubungi admin rekompus.`,
      }).then(
        window.location.href = '/#/',
      );
    }
  }

  static async updateKampus(id, data) {
    try {
      const response = await fetch(API_ENDPOINT.UPDATE_KAMPUS(id), {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${getCookie('jwt')}`,
          'Content-Type': 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const responseJson = await response.json();
        swal({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Berhasil mengupdate data kampus!',
        }).then(() => {
          window.location.reload();
          return responseJson;
        });
      }
    } catch (error) {
      swal({
        icon: 'success',
        title: 'Gagal Update!',
        text: `Gagal update kampus!, karena terjadi error berikut ${error.message} `,
      });
    }
  }

  static async deleteKampus(id) {
    try {
      const response = await fetch(API_ENDPOINT.DELETE_KAMPUS(id), {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getCookie('jwt')}`,
          'Accept-Encoding': 'gzip, deflate, br',
        },
      });

      if (response.status === 500) {
        swal({
          icon: 'warning',
          title: 'Internal Server Error!',
          text: `Masalah yang terjadi adalah Internal Server Error, dengan response status code ${response.status} jika masalah masih belum segera terselesaikan. Hubungi admin rekompus.`,
        });
      }

      const responseJson = response.json();
      return responseJson;
    } catch (error) {
      swal({
        icon: 'error',
        title: 'Error!',
        text: `Masalah yang terjadi adalah ${error.message}, jika masalah masih belum segera terselesaikan. Hubungi admin rekompus.`,
      });
    }
  }

  static async uploadLogo(id, body) {
    try {
      const response = await fetch(API_ENDPOINT.UPLOAD_LOGO(id), {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${getCookie('jwt')}`,
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body,
      });
      if (response.ok) {
        return response;
      }

      if (response.status === 500) {
        swal({
          icon: 'error',
          title: 'Internal Server Error!',
          text: 'Masalah yang terjadi adalah Internal Server Error!, jika masalah masih belum segera terselesaikan. Hubungi admin rekompus.',
        });
      }
    } catch (error) {
      swal({
        icon: 'error',
        title: 'Error!',
        text: `Masalah yang terjadi adalah ${error.message}, jika masalah masih belum segera terselesaikan. Hubungi admin rekompus.`,
      });
    }
  }
}

export default RekompusSource;
