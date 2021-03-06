/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import CONFIG from '../../globals/config';
import { getCookie } from '../../utils/cookie';

const heroText = (text) => `
    <h1 class="text-center text-white">${text}</h1>
`;

const searchBar = () => `
<div class="search-bar container-fluid bg-info pt-2 pb-2">
    <label class="visually-hidden" for="autoSizingInputGroup">Search</label>
    <div class="input-group mb-2">
        <div class="input-group-text">
            <i class="fas fa-magnifying-glass"></i>
        </div>
        <input type="search" class="form-control search" id="autoSizingInputGroup" placeholder="Masukkan nama kampus">
    </div>
</div>
`;

const createListKampusItemTemplate = (kampus) => `
  <div class="col-md-12 mb-3">
    <div class="card border-orange">
        <div class="card-body d-flex">
            <div class="thumb-container row">
                <div class="col-md-1 mt-1">
                    <a href="/#/kampus/${kampus.id}">
                    <img src="${kampus.pictureId ? `${CONFIG.BASE_IMAGE_URL}/${kampus.pictureId}` : './images/default-school.png'}" alt="${kampus.name}" class="thumb-img">
                    </a>
                </div>
                <div class="col-md-3 mt-1">
                  <h4 class="fw-bold"><a href="/#" class="text-dark">${kampus.name}</a></h4>
                  <p><i class="fas fa-location-dot" aria-hidden="true"></i> ${kampus.city}</p>
                  <span class="d-inline-block my-1 alert alert-info px-2 py-1 rounded-pill">Akreditasi: ${kampus.akreditasiKampus}</span>
                  <span class="d-inline-block my-1 alert alert-info px-2 py-1 rounded-pill">${kampus.jenisKampus}</span>
                </div>
                <div class="col-md-3 mt-1">
                  <h4><u>Kelas Tersedia</u></h4>
                  ${kelasItem(kampus.kelasTersedia)}
                </div>
                <div class="col-md-3 mt-1">
                  <h4><u>Jurusan</u></h4>
                  ${jurusanItemWithLimit(kampus.jurusan)}
                <br>
                <a href="/#/kampus/${kampus.id}" style="z-index: 30;"><button class="btn alert-info py-1 px-2 rounded-pill">Selengkapnya</button></a>
                </div>
                <div class="col-md-2 mt-1">
                  <h4><u>Status PMB</u></h4>
                  ${checkPmb(kampus.statusPmb)}
                </div>
            </div>
          <a href="/#/kampus/${kampus.id}" class="stretched-link"></a>
        </div>
    </div>
  </div>`;

const createListJurusanItemTemplate = (jurusan) => `
  <div class="col-md-12 mb-3">
    <div class="card border-orange">
        <div class="card-body d-flex">
            <div class="thumb-container row">
                <div class="col-md-1 mt-2">
                    <a href="/#/kampus/${jurusan.id_kampus}/jurusan/${jurusan.id}">
                    <img src="${jurusan.pictureId ? `${CONFIG.BASE_IMAGE_URL}/${jurusan.pictureId}` : './images/default-school.png'}" alt="${jurusan.nama_kampus}" class="thumb-img">
                    </a>
                </div>
                <div class="col-md-3 mt-2">
                  <h4 class="fw-bold"><a href="/#/kampus/${jurusan.id_kampus}/jurusan/${jurusan.id}" class="text-dark">${jurusan.name}</a></h4>
                  <p><i class="fas fa-location-dot" aria-hidden="true"></i> ${jurusan.city}</p>
                  <span class="d-inline-block my-1 alert alert-info px-2 py-1 rounded-pill">Akreditasi Jurusan: ${jurusan.akreditasi}</span>
                  <span class="d-inline-block my-1 alert alert-info px-3 py-1 rounded-pill">${jurusan.jenjang}</span>
                </div>                
                <div class="col-md-3 mt-2">
                  <h4><u>Kelas Tersedia</u></h4>
                  ${jurusan.kelas.map((item) => `${item.name}<hr class="m-0">`).join('')}
                </div>
                <div class="col-md-2 mt-2">
                  <h4><u>Status PMB</u></h4>
                  ${checkPmb(jurusan.statusPmb)}
                </div>
                <div class="col-md-3 mt-2 my-auto">
                  <p><span class="alert alert-info py-1 py-2 my-2 rounded-pill fw-bold d-inline-block fs-5"><a href="/#/kampus/${jurusan.id_kampus}" class="text-dark">${jurusan.nama_kampus}</a></span></p>
                </div>
            </div>
        </div>
    </div>
  </div>`;

const createListKampusItemTemplateDashboard = (kampus) => `
  <div class="col-md-12 mb-3 px-1">
    <div class="card border-orange">
      <div class="card-body d-flex">
        <div class="thumb-container row">
          <div class="col-sm-6 col-md-1 my-2">
            <a href="/#/kampus/${kampus.id}">
              <img src="${kampus.pictureId ? `${CONFIG.BASE_IMAGE_URL}/${kampus.pictureId}` : './images/default-school.png'}" alt="${kampus.name}" class="thumb-img">
            </a>
          </div>
          <div class="col-sm-6 col-md-3 my-2">
            <h4 class="fw-bold"><a href="/#/kampus/${kampus.id}" class="text-dark">${kampus.name}</a></h4>
            <p><i class="fas fa-location-dot" aria-hidden="true"></i> ${kampus.city}</p>
            <span class="d-inline-block my-1 alert alert-info py-1 px-2 rounded-pill">Akreditasi: ${kampus.akreditasiKampus}</span>
            <span class="d-inline-block my-1 alert alert-info py-1 px-2 rounded-pill">${kampus.jenisKampus}</span>
          </div>
          <div class="col-sm-6 col-md-2 my-2">
            <h4><u>Kelas Tersedia</u></h4>
            ${kelasItem(kampus.kelasTersedia)}
          </div>
          <div class="col-sm-6 col-md-2 my-2">
            <h4><u>Jurusan</u></h4>
            ${jurusanItemWithLimit(kampus.jurusan)}
            <br>
            <a href="#/kampus/${kampus.id}"><button class="btn alert-info py-1 px-2 rounded-pill">Selengkapnya</button></a>
          </div>
          <div class="col-sm-6 col-md-2 my-2">
            <h4><u>Status PMB</u></h4>
            ${checkPmb(kampus.statusPmb)}
          </div>
          <div class="col-sm-6 col-md-2 my-2 d-flex align-items-center justify-content-around" data-id="${kampus.id}" data-name="${kampus.name}">
            <a href="#/kampus/${kampus.id}" class="text-info"><i class="fa fa-circle-info fa-4x"></i></a>
            <a href="#/delete/${getCookie('email')}" class="text-danger delete-item"><i class="fa fa-trash fa-4x border-none"
            aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
const createListKampusItemTemplateDashboardAdmin = (kampus) => `
  <div class="col-md-12 mb-3 px-1">
    <div class="card border-orange">
      <div class="card-body d-flex">
        <div class="thumb-container row">
          <div class="col-sm-6 col-md-1 my-2">
            <a href="/#/kampus/${kampus.id}">
              <img src="${kampus.pictureId ? `${CONFIG.BASE_IMAGE_URL}/${kampus.pictureId}` : './images/default-school.png'}" alt="${kampus.name}" class="thumb-img">
            </a>
          </div>
          <div class="col-sm-6 col-md-3 my-2">
            <h4 class="fw-bold"><a href="/#/kampus/${kampus.id}" class="text-dark">${kampus.name}</a></h4>
            <p><i class="fas fa-location-dot" aria-hidden="true"></i> ${kampus.city}</p>
            <span class="d-inline-block my-1 alert alert-info py-1 px-2 rounded-pill">Akreditasi: ${kampus.akreditasiKampus}</span>
            <span class="d-inline-block my-1 alert alert-info py-1 px-2 rounded-pill">${kampus.jenisKampus}</span>
          </div>
          <div class="col-sm-6 col-md-2 my-2">
            <h4><u>Kelas Tersedia</u></h4>
            ${kelasItem(kampus.kelasTersedia)}
          </div>
          <div class="col-sm-6 col-md-2 my-2">
            <h4><u>Jurusan</u></h4>
            ${jurusanItemWithLimit(kampus.jurusan)}
            <br>
            <a href="#/kampus/${kampus.id}"><button class="btn alert-info py-1 px-2 rounded-pill">Selengkapnya</button></a>
          </div>
          <div class="col-sm-6 col-md-2 my-2">
            <h4><u>Status PMB</u></h4>
            ${checkPmb(kampus.statusPmb)}
          </div>
          <div class="col-sm-6 col-md-2 my-2 d-flex align-items-center justify-content-around" data-id="${kampus.id}" data-name="${kampus.name}">
            <a href="#/info-kampus/${kampus.id}" class="text-info"><i class="fa fa-circle-info fa-4x"></i></a>
            <a href="#/admin/${getCookie('email')}" class="text-danger delete-item"><i class="fa fa-trash fa-4x border-none"
            aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

const createKampusDetailTemplate = (kampus) => {
  const result = kampus.map((data) => `
  <div class="col-md-8 mt-3">
    <div class="card bg-info border-orange">
      <div class="card-header alert-info text-center">
        <div class="d-flex scroll-x">
          <span><a href="/#/kampus/${data.id}#info-kampus" class="text-muted fw-bold fs-5" id="scrollKampus">Info Kampus</a></span>
          <span><a href="/#/kampus/${data.id}#jurusan-tersedia" class="text-muted fw-bold fs-5" id="scrollJurusan">Jurusan Tersedia</a></span>
          <span><a href="/#/kampus/${data.id}#review" class="text-muted fw-bold fs-5" id="scrollReview">Review</a></span>              
        </div>

      </div>
      <div class="card-body bg-light br row m-2">
        <h4 class="text-muted text-center mb-2"><u>Kelas Tersedia</u></h4>
        <div class="col-md-12 mb-4 d-flex justify-content-around p-3 bg-light shadow-sm scroll-x">
          ${kelasItem(data.kelasTersedia, 'span')}
        </div>
        <h4 class="text-muted text-center mb-2"><u>Tentang Kampus</u></h4>
        <div class="col-md-12 mb-4 d-flex justify-content-between bg-light shadow-sm p-3" id="info-kampus">
          <div class="row">
            <div class="col-md-12">
              <p class="desc-kampus">${data.description ? data.description : '<span class="text-danger">No Data</span>'}</p>
            </div>
            <div class="col-md-6 ${data.linkPendaftaran ? 'col-lg-6' : 'col-lg-8'} mt-2">
              <div class="group-text d-flex">
                <h6 class="text-heading">Tahun Berdiri</h6>
                <span class="text-muted ms-auto ps-2">${data.tahunBerdiri ? data.tahunBerdiri : '<span class="text-danger">No Data</span>'}</span>
              </div>
              <div class="group-text d-flex">
                <h6 class="text-heading">No Telepon</h6>
                <span class="text-muted ms-auto ps-2">${data.telepon ? data.telepon : '<span class="text-danger">No Data</span>'}</span>
              </div>
              <div class="group-text d-flex">
                <h6 class="text-heading">Email</h6>
                <span class="text-muted ms-auto ps-2">${data.email ? data.email : '<span class="text-danger">No Data</span>'}</span>
              </div>
              <div class="group-text d-flex">
                <h6 class="text-heading">Alamat</h6>
                <span class="text-muted ms-auto ps-2" style="text-align: right;">${data.alamat ? data.alamat : '<span class="text-danger">No Data</span>'}</span>
              </div>
            </div>
            <div class="col-md-6 ${data.linkPendaftaran ? 'col-lg-6' : 'col-lg-4'} mt-2">
              <div class="group-text">
                <h6 class="text-heading">Link Pendaftaran</h6>
                <p class="text-muted">${data.linkPendaftaran ? `<a href="${checkLink(data.linkPendaftaran)}" target="_blank">Kunjungi ${data.name}</a>` : '<span class="text-danger">No Data</span>'}
              </div>
              <div class="group-text">
                <h6 class="text-heading">Media Sosial</h6>
                ${data.linkFb ? `<a href="${data.linkFb}" target="_blank"  class="fs-3"><i class="fab fa-facebook-square fa-xl" aria-hidden="true"></i></a>` : ''}
                ${data.linkTwitter ? `<a href="${data.linkTwitter}" target="_blank"  class="fs-3"><i class="fab fa-twitter-square fa-xl" aria-hidden="true"></i></a>` : ''}
                ${data.linkIg ? `<a href="${data.linkIg}" target="_blank"  class="fs-3"><i class="fab fa-instagram-square fa-xl" aria-hidden="true"></i></a>` : ''}               
              </div>
            </div>
          </div>
        </div>
        <h4 class="text-muted text-center mb-2"><u>Jurusan Tersedia</u></h4>
        <div class="col-md-12 mb-4 bg-info shadow-sm p-3">
          <div class="row">
            <div class="col-md-6">
              <div class="input-group mb-2">
                <div class="input-group-text">
                  <i class="fas fa-magnifying-glass"></i>
                </div>
                <input type="text" class="form-control" id="jurusanField" placeholder="Masukkan Jurusan">
              </div>
            </div>
            <div class="col-md-6 mt-2">
              <h5 id="jurusan-length"></h5>
            </div>
            <div class="col-md-12">
              <div class="row bg-light shadow-sm" id="jurusan-tersedia">
              </div>
            </div>
          </div>
        </div>
        <h4 id="review" class="text-center mb-2">Form Review</h4>
        <hr>
        <form id="postReview" class="shadow-sm">
          <input type="hidden" id="txtId" value="${data.id}">
          <label for="txtName">Nama anda :</label>
          <br>
          <input type="text" id="txtNama" class="form-control mb-2" value="${getCookie('name')}" readonly>
          <label for="txtReview">Review anda :</label>
          <textarea id="txtReview" placeholder="Masukkan review anda..." class="form-control mb-2" required></textarea>
          <button type="submit" class="btn btn-primary text-white fs-4 mb-2"><i class="fas fa-paper-plane" aria-hidden="true"></i> Post</button>
          <button type="reset" class="btn btn-danger text-white fs-4 mb-2"><i class="fa fa-arrow-rotate-back" aria-hidden="true"></i> Reset</button>
          <br>
        </form>
        <h4 class="text-center mt-4 mb-2">User Reviews</h4>
        <hr>
        <div class="container-reviews shadow-sm">
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-4 mt-3">
    <div class="row">
      <div class="col-md-12">
        <div class="card border-orange">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12 col-lg-4">
                <img src="${data.pictureId ? `${CONFIG.BASE_IMAGE_URL}/${data.pictureId}` : './images/default-school.png'}" alt="${data.name}" class="thumb-img-detail">
              </div>
              <div class="col-md-12 col-lg-8">
                <div class="row">
                  <div class="col-md-12 col-lg-12">
                    <h5 class="text-heading">${data.name}</h5>
                  </div>
                  <div class="col-md-12 col-lg-12 mb-2">
                    <span class="alert alert-info px-2 py-1 d-inline-block rounded-pill my-1">Akreditasi: ${data.akreditasiKampus ? data.akreditasiKampus : 'Tidak tersedia'}</span>
                    <span class="alert alert-info px-3 py-1 d-inline-block rounded-pill my-1">${data.jenisKampus ? data.jenisKampus : 'Jenis Kampus'}</span>
                  </div>
                  <div class="col-md-12 col-lg-12 mb-2">
                    ${checkPmb(data.statusPmb)}                     
                  </div>
                </div>
              </div>
              <div class="col-md-12">
              ${data.linkPendaftaran ? `<a href="${checkLink(data.linkPendaftaran)}" target="_blank"> 
              <button class="btn btn-primary w-100 mt-1 mb-1 p-2 fs-5"><i class="fab fa-wpforms fa-xl"></i> Link
              Pendaftaran
              </button>
              </a>` : `
                <button class="btn btn-primary w-100 mt-1 mb-1 p-2 fs-5" disabled><i class="fab fa-wpforms fa-xl"></i> Link
                Pendaftaran
                </button>
              `}                
              </div>
              <div class="col-md-12">
                ${data.telepon ? `<a href="${redirectWa(data.telepon)}">
                <button class="btn btn-success w-100 mt-1 mb-1 p-2 fs-5"><i class="fab fa-whatsapp fa-xl"
                aria-hidden="true"></i> Tanya via WhatsApp</button></a>
                ` : `
                <button class="btn btn-success w-100 mt-1 mb-1 p-2 fs-5" disabled><i class="fab fa-whatsapp fa-xl"
                aria-hidden="true"></i> Tanya via WhatsApp</button>
                `}
                  
              </div>
            </div>
          </div>          
        </div>
      </div>
    </div>
  </div>`);
  const finalResult = result.join('');
  return finalResult;
};

const createKampusDetailForm = (kampus) => {
  const result = kampus.map((data) => `
    <section class="head-profile mt-2">
      <div class="card border-orange bg-light">
        <div class="row alert-info m-3">
          <div class="col-md-2 p-3">
            <img src="${data.pictureId ? `${CONFIG.BASE_IMAGE_URL}/${data.pictureId}` : './images/default-school.png'}" alt="${data.name}" class="thumb-img-detail">
          </div>
          <div class="col-md-5 p-3 my-auto ml-auto">
            <h4 class="fw-bold text-muted">${data.name ? data.name : 'Nama Kampus'}</h4>
            <p class="fw-bold text-muted">${data.city ? data.city : 'Kota'}</p>
          </div>
          <div class="col-md-5 p-3 my-auto">
            <a href="/#/edit-kampus/${data.id}"
              class="link text-dark text-decoration-none fw-bold fs-5 py-2">
              <i class="fa fa-edit fa-2x text-muted" aria-hidden="true"></i> <span class="text-muted ">Atur data
                kampus</span>
            </a>
          </div>
        </div>
      </div>
    </section>
      
    <section class="form-kampus my-3">
      <div class="card">
        <div class="card-header alert-info">
          <h4 class="text-heading text-muted fw-bolder">Form Kampus</h4>
        </div>

        <div class="card-body">
          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="namaKampus">
                  <h5 class="fw-bold text-muted">Nama Kampus</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <input type="text" class="form-control border-orange w-100" id="namaKampus" placeholder="Nama Kampus" readonly value="${data.name}">
              </div>
            </div>
          </div>
          
          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="deskripsi">
                  <h5 class="fw-bold text-muted">Deskripsi</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <textarea id="deskripsi" class="form-control border-orange w-100" placeholder="Deskripsi kampus" readonly value="">${data.description}</textarea>
              </div>
            </div>
          </div>

          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="jenisKampus">
                  <h5 class="fw-bold text-muted">Jenis Kampus</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
              <select id="jenisKampus" class="form-control border-orange w-100" disabled>
                <option value="${data.jenisKampus}" selected>${data.jenisKampus}</option>
              </select>
              </div>
            </div>
          </div>

          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="statusPMB">
                  <h5 class="fw-bold text-muted">Status PMB</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
              <select id="statusPMB" class="form-control border-orange w-100" disabled>
                <option value="${data.statusPmb}" selected>${data.statusPmb}</option>
              </select>
              </div>
            </div>
          </div>
          
          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="kota">
                  <h5 class="fw-bold text-muted">Kota</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <input type="text" id="kota" class="form-control border-orange w-100" placeholder="Kota" readonly value="${data.city}">
              </div>
            </div>
          </div>

          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="alamat">
                  <h5 class="fw-bold text-muted">Alamat</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <textarea id="alamat" class="form-control border-orange w-100" placeholder="Alamat kampus" readonly>${data.alamat}</textarea>
              </div>
            </div>
          </div>            

          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="logoKampus">
                  <h5 class="fw-bold text-muted">Logo Kampus</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <input type="file" id="logoKampus" class="form-control border-orange w-100" disabled value="${data.pictureId}">
              </div>
            </div>              
          </div>         
          
          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="kelasTersedia">
                  <h5 class="fw-bold text-muted">Kelas Tersedia</h5>
                </label>
              </div>

              <div class="col-sm-12 col-md-9 row">
                <div class="col-sm-6 col-md-4">
                  <input type="checkbox" name="kelasTersedia" id="Reguler" value="Reguler"
                    class="form-check-input" disabled ${data.kelasTersedia[0] ? 'checked' : ''}>
                  <label for="Reguler" class="form-check-label">Reguler</label>
                </div>

                <div class="col-sm-6 col-md-4">
                  <input type="checkbox" name="kelasTersedia" id="Karyawan" value="Karyawan"
                    class="form-check-input" disabled ${data.kelasTersedia[1] ? 'checked' : ''}>
                  <label for="Karyawan" class="form-check-label">Karyawan</label>
                </div>

                <div class="col-sm-6 col-md-4">
                  <input type="checkbox" name="kelasTersedia" id="Online" value="Online"
                    class="form-check-input" disabled ${data.kelasTersedia[2] ? 'checked' : ''}>
                  <label for="Online" class="form-check-label">Online</label>
                </div>
              </div>
            </div>
          </div>      
          
          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="tahunBerdiri">
                  <h5 class="fw-bold text-muted">Tahun berdiri</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <input type="number" id="tahunBerdiri" class="form-control border-orange w-100" placeholder="Tahun berdiri" readonly value="${data.tahunBerdiri}">
              </div>
            </div>
          </div>

          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="noTelepon">
                  <h5 class="fw-bold text-muted">No Telepon</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <input type="text" id="noTelepon" class="form-control border-orange w-100" placeholder="No Telepon" readonly value="${data.telepon}">
              </div>
            </div>   
          </div>

          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="email">
                  <h5 class="fw-bold text-muted">Email</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <input type="email" id="email" class="form-control border-orange w-100" placeholder="Email" readonly value="${data.email}">
              </div>
            </div>                 
          </div>

          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="website">
                  <h5 class="fw-bold text-muted">Link Pendaftaran</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <input type="text" id="website" class="form-control border-orange w-100" placeholder="Link pendaftaran" readonly value="${data.linkPendaftaran}">
              </div>
            </div>               
          </div>

          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="mediaSosial">
                  <h5 class="fw-bold text-muted">Media Sosial</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <div class="input-group row" id="mediaSosial">
                  <div class="col-sm-12 col-md-4 my-1">
                    <input type="text" class="form-control border-orange w-100" id="facebook" placeholder="Facebook" aria-label="facebook" readonly value="${data.linkFb}">
                  </div>
                  <div class="col-sm-12 col-md-4 my-1">
                    <input type="text" class="form-control border-orange w-100" id="twitter" placeholder="Twitter" aria-label="twitter" readonly value="${data.linkTwitter}">
                  </div>
                  <div class="col-sm-12 col-md-4 my-1">
                    <input type="text" class="form-control border-orange w-100" id="instagram" placeholder="Instagram" aria-label="instagram" readonly value="${data.linkIg}">
                  </div>                    
                </div>
              </div>
            </div>                
          </div>

          <div class="text-end">
            <a href="#/info-kampus/${data.id}" id="${data.id}" class="delete-item">
            <button type="submit" class="btn btn-danger fs-4 my-1"><i class="fa fa-trash fa-lg" aria-hidden="true"></i> Hapus</button>
            </a>  
            <a href="#/admin/${getCookie('email')}">
            <button type="submit" class="btn btn-warning text-white fs-4 my-1"><i class="fa fa-arrow-rotate-back fa-lg" aria-hidden="true"></i> Kembali</button>
            </a>  
          </div>
        </div>
      </div>
    </section>
  `);

  return result;
};

const createKampusDetailFormWithSubmit = (kampus) => {
  const result = kampus.map((data) => `
    <section class="head-profile mt-2">
      <div class="card border-orange bg-light">
        <div class="row alert-info m-3">
          <div class="col-md-2 p-3">
            <span class="d-inline-block">
            <img src="${data.pictureId ? `${CONFIG.BASE_IMAGE_URL}/${data.pictureId}` : './images/default-school.png'}" alt="${data.name}" class="thumb-img-detail">
            </span>
            
            <span class="d-inline-block mt-4">
                             
                <div class="modal fade" id="modalUploadLogo" tabindex="-1" aria-labelledby="modalUploadLogoLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="modalUploadLogoLabel">Unggah Logo Kampus</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <form id="uploadLogo" method="post">
                        <div class="modal-body">
                          <div class="mb-3">
                            <div class="alert alert-warning py-1 py-2 rounded-pill text-center">Disarankan mengupload logo dengan rasio 1 : 1</div>
                            <label for="postLogoKampus" class="form-label">Logo Kampus</label>
                            <input type="hidden" id="idLogo" value="${data.id}">

                            <input class="form-control" type="file" id="postLogoKampus">
                          </div>
                          <div id="previewLogo"></div>
                        </div>
                        <div class="modal-footer">
                          <button type="reset" class="btn btn-danger">Reset</button>
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                          <button type="submit" class="btn btn-primary">Unggah logo</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn btn-dblue rounded-circle p-3" data-bs-toggle="modal" data-bs-target="#modalUploadLogo">
                <i class="fas fa-camera fa-xl"></i>
                </button>
            </span>
          </div>
          <div class="col-md-5 p-3 my-auto ml-auto">
            <h4 class="fw-bold text-muted">${data.name ? data.name : 'Nama Kampus'}</h4>
            <p class="fw-bold text-muted">${data.city ? data.city : 'Kota'}</p>
          </div>
          <div class="col-md-5 p-3 my-auto">
            <a href="/#/info-kampus/${data.id}"
              class="link text-dark text-decoration-none border-bottom border-info border-2 fw-bold fs-5 py-2">
              <i class="fa fa-edit fa-2x text-muted" aria-hidden="true"></i> <span class="text-muted ">Atur data
                kampus</span>
            </a>
          </div>
        </div>
      </div>
    </section>
      
    <section class="form-kampus my-3">
      <div class="card">
        <div class="card-header alert-info">
          <h4 class="text-heading text-muted fw-bolder">Form Kampus</h4>
        </div>
        
        <form id="formUpdateKampus">
        <input type="hidden" id="idKampus" value="${data.id}">
          <div class="card-body">
            <div class="card border-orange mb-3 alert-info">
              <div class="row p-2 align-items-center">
                <div class="col-sm-12 col-md-3">
                  <label for="namaKampus">
                    <h5 class="fw-bold text-muted">Nama Kampus</h5>
                  </label>
                </div>
                <div class="col-sm-12 col-md-9">
                  <input type="text" class="form-control border-orange w-100" id="namaKampus" placeholder="Nama Kampus" value="${data.name}">
                </div>
              </div>
            </div>
            
            <div class="card border-orange mb-3 alert-info">
              <div class="row p-2 align-items-center">
                <div class="col-sm-12 col-md-3">
                  <label for="deskripsi">
                    <h5 class="fw-bold text-muted">Deskripsi</h5>
                  </label>
                </div>
                <div class="col-sm-12 col-md-9">
                  <textarea id="deskripsi" class="form-control border-orange w-100" placeholder="Deskripsi kampus" value="">${data.description}</textarea>
                </div>
              </div>
            </div>
            <div class="card border-orange mb-3 alert-info">
              <div class="row p-2 align-items-center">
                <div class="col-sm-12 col-md-3">
                  <label for="akreditasiKampus">
                    <h5 class="fw-bold text-muted">Akreditasi Kampus</h5>
                  </label>
                </div>

                <div class="col-sm-12 col-md-9">
                ${akreditasiKampus(data.akreditasiKampus).outerHTML}
                </div>
              </div>
            </div>

            <div class="card border-orange mb-3 alert-info">
              <div class="row p-2 align-items-center">
                <div class="col-sm-12 col-md-3">
                  <label for="statusPMB">
                    <h5 class="fw-bold text-muted">Status PMB</h5>
                  </label>
                </div>
                <div class="col-sm-12 col-md-9">
                <select id="statusPMB" class="form-control border-orange w-100">
                  ${data.statusPmb === 'Buka' ? `
                  <option value="Buka" selected>Dibuka</option>
                  <option value="Tutup">Ditutup</option>
                  ` : `<option value="Tutup" selected>Ditutup</option>
                  <option value="Buka">Dibuka</option>
                  `}
                </select>
                </div>
              </div>
            </div>
            
            <div class="card border-orange mb-3 alert-info">
              <div class="row p-2 align-items-center">
                <div class="col-sm-12 col-md-3">
                  <label for="kota">
                    <h5 class="fw-bold text-muted">Kota</h5>
                  </label>
                </div>
                <div class="col-sm-12 col-md-9">
                  <input type="text" id="kota" class="form-control border-orange w-100" placeholder="Kota" value="${data.city}">
                </div>
              </div>
            </div>                
            
            <div class="card border-orange mb-3 alert-info">
              <div class="row p-2 align-items-center">
                <div class="col-sm-12 col-md-3">
                  <label for="kelasTersedia">
                    <h5 class="fw-bold text-muted">Kelas Tersedia</h5>
                  </label>
                </div>

                <div class="col-sm-12 col-md-9 row">
                  ${editKelasTersedia(data.kelasTersedia)}                
                </div>
              </div>
            </div>                  

            <div class="text-end">
              <button type="submit" class="btn btn-success fs-4 my-1">
              <i class="fa fa-arrow-up-from-bracket fa-lg"></i> Update
              </button>              
              <button type="reset" class="btn btn-danger fs-4 my-1">
              <i class="fa fa-undo fa-lg"></i> Reset
              </button>              
            </div>
          </div>
        </form>
      </div>
    </section>
  `);

  return result;
};

const createJurusanDetailTemplate = (kampus, idJurusan) => {
  const dataKampus = kampus.map((data) => `
  <section class="hero-text container-fluid">
    <div class="row">
      <div class="col-md-12">
        <a href="#/kampus/${data.id}">
          <span
            class="alert bg-primary border-2 border-white rounded-3 text-white fw-bold fs-4 py-2 px-3 d-inline-block"><i class="fa fa-school"></i> ${data.name}</span>
        </a>
      </div>

      <div class="col-md-12">
        <h4 class="fw-bold text-white fs-3 pb-2"><i class="fa fa-graduation-cap"></i> ${data.jurusan.filter((item) => item.id === idJurusan).map((item) => item.namaJurusan)}</h4>
      </div>

      <div class="col-md-12">       
        ${loopJurusanWithFilterHeading(data, idJurusan)}
      </div>
    </div>
    </section>
    ${itemsJurusanWithFilter(data, idJurusan)}
    ${getCookie('role') !== 'ADMIN' ? '<div id="likeButtonContainer"></div>' : ''}
  `);
  return dataKampus;
};

const createSettingJurusanContainerTemplate = (kampus) => {
  const result = kampus.map((data) => `
    <section class="head-profile mt-2">
      <div class="card border-orange bg-light">
        <div class="row alert-info m-3">
          <div class="col-md-2 p-3">
            <img src="${data.pictureId ? `${CONFIG.BASE_IMAGE_URL}/${data.pictureId}` : './images/default-school.png'}" alt="${data.name}" class="thumb-img-detail">
          </div>
          <div class="col-md-5 p-3 my-auto ml-auto">
            <h4 class="fw-bold text-muted">${data.name}</h4>
            <p class="fw-bold text-muted">${data.city}</p>
          </div>
          <div class="col-md-5 p-3 my-auto">
            <a href="/#/edit-kampus/${data.id}" class="link text-dark text-decoration-none fs-5 py-2 fw-bold">
              <i class="fa fa-edit fa-2x text-muted" aria-hidden="true"></i> <span class="text-muted ">Atur data
                kampus</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="card my-3">
      <div class="card-header alert-info">
        <div class="d-flex justify-content-around alert-info py-2">
          <a class="d-inline-block text-decoration-none text-muted border-bottom border-info border-2 text-center mx-2" role="button"
            data-bs-toggle="collapse" href="#/dashboard/#jurusanList" data-bs-target="#jurusanList" aria-expanded="true"
            aria-controls="jurusanList" id="btnJurusanList">
            <h4>List Jurusan</h4>
          </a>

          <a class="d-inline-block text-decoration-none text-muted fw-bold text-center mx-2" role="button" data-bs-toggle="collapse"
            href="#/dashboard/#addJurusan" aria-expanded="true" data-bs-target="#addJurusan" aria-controls="addJurusan"
            id="btnAddJurusan">
            <h4>Tambah Jurusan</h4>
          </a>
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-12">
            <div class="collapse show" id="jurusanList">
              <div class="card border-0">
                <div class="row list-jurusan-container">
                  ${jurusanSettingItemTemplate(data.jurusan)}
                </div>
                <ul class="pagination pagination-md justify-content-center mt-2">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">Previous</span>
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>

                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">Next</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-12">
            <div class="collapse" id="addJurusan">
              <div class="card border-0">
                <div class="row">
                  <div class="col-md-12 mb-3">
                    <form id="formJurusan">
                      <div class="card border-0">
                        <div class="card border-orange mb-3 alert-info">
                          <div class="row p-2 align-items-center">
                            <div class="col-sm-12 col-md-3">
                              <label for="namaJurusan">
                                <h5 class="fw-bold text-muted">Nama Jurusan</h5>
                              </label>
                            </div>
                            <div class="col-sm-12 col-md-9">
                              <input type="text" class="form-control border-orange w-100" id="namaJurusan"
                                placeholder="Masukkan Nama Jurusan">
                            </div>
                          </div>
                        </div>
                        <div class="card border-orange mb-3 alert-info">
                          <div class="row p-2 align-items-center">
                            <div class="col-sm-12 col-md-3">
                              <label for="jenjang">
                                <h5 class="fw-bold text-muted">Jenjang</h5>
                              </label>
                            </div>

                            <div class="col-sm-12 col-md-9">
                              <select id="jenjang" class="form-control border-orange w-100">
                                <option value="" selected disabled>Pilih Jenjang</option>
                                <option value="S1">S1</option>
                                <option value="S2">S2</option>
                                <option value="S3">S3</option>
                                <option value="D1">D1</option>
                                <option value="D2">D2</option>
                                <option value="D3">D3</option>
                                <option value="D4">D4</option>
                                <option value="Profesi">Profesi</option>
                                <option value="SP-1">Sp-1</option>
                                <option value="SP-2">Sp-2</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div class="card border-orange mb-3 alert-info">
                          <div class="row p-2 align-items-center">
                            <div class="col-sm-12 col-md-3">
                              <label for="deskripsiJurusan">
                                <h5 class="fw-bold text-muted">Deskripsi Jurusan</h5>
                              </label>
                            </div>
                            <div class="col-sm-12 col-md-9">
                              <textarea id="deskripsiJurusan" class="form-control w-100 border-orange"
                                placeholder="Deskripsi Jurusan"></textarea>
                            </div>
                          </div>
                        </div>
                        
                        <div class="card border-orange mb-3 alert-info">
                          <div class="row p-2 align-items-center">
                            <div class="col-sm-12 col-md-3">
                              <label for="kelasTersedia">
                                <h5 class="fw-bold text-muted">Kelas Tersedia</h5>
                              </label>
                            </div>

                            <div class="col-sm-12 col-md-9 row">
                              <div class="col-sm-6 col-md-4">
                                <input type="checkbox" name="kelasTersedia" id="Reguler" value="Reguler"
                                  class="form-check-input">
                                <label for="Reguler" class="form-check-label">Reguler</label>
                              </div>

                              <div class="col-sm-6 col-md-4">
                                <input type="checkbox" name="kelasTersedia" id="Karyawan" value="Karyawan"
                                  class="form-check-input">
                                <label for="Karyawan" class="form-check-label">Karyawan</label>
                              </div>

                              <div class="col-sm-6 col-md-4">
                                <input type="checkbox" name="kelasTersedia" id="Online" value="Online"
                                  class="form-check-input">
                                <label for="Online" class="form-check-label">Online</label>
                              </div>
                            </div>
                          </div>
                        </div> 

                        <div class="card border-orange mb-3 alert-info">
                          <div class="row p-2 align-items-center">
                            <div class="col-sm-12 col-md-3">
                              <label for="biayaSPP">
                                <h5 class="fw-bold text-muted">Biaya SPP</h5>
                              </label>
                            </div>
                            <div class="col-sm-12 col-md-9">
                            <div class="row">
                              <div class="col-sm-12 col-md-4 my-1">
                                <input type="number" class="form-control border-orange w-100" id="sppReguler"
                                placeholder="SPP Reguler">
                              </div>
                              <div class="col-sm-12 col-md-4 my-1">
                                <input type="number" class="form-control border-orange w-100" id="sppKaryawan"
                                placeholder="SPP Karyawan">
                              </div>
                              <div class="col-sm-12 col-md-4 my-1">
                                <input type="number" class="form-control border-orange w-100" id="sppOnline"
                                placeholder="SPP Online">
                              </div>
                            </div>                                
                            </div>
                          </div>
                        </div>

                        <div class="card border-orange mb-3 alert-info">
                          <div class="row p-2 align-items-center">
                            <div class="col-sm-12 col-md-3">
                              <label for="pelajaran">
                                <h5 class="fw-bold text-muted">Pelajaran yang didapat</h5>
                              </label>
                            </div>
                            <div class="col-sm-12 col-md-9">
                              <textarea id="pelajaran" class="form-control w-100 border-orange"
                                placeholder="Masukkan pelajaran yang akan dipelajari di Jurusan ini. Jika lebih dari satu pisahkan dengan tanda koma (,)."></textarea>
                            </div>
                          </div>
                        </div>

                        <div class="card border-orange mb-3 alert-info">
                          <div class="row p-2 align-items-center">
                            <div class="col-sm-12 col-md-3">
                              <label for="prospekKarir">
                                <h5 class="fw-bold text-muted">Prospek Karir</h5>
                              </label>
                            </div>
                            <div class="col-sm-12 col-md-9">
                              <textarea id="prospekKarir" class="form-control w-100 border-orange"
                                placeholder="Masukkan prospek karir. Jika lebih dari satu pisahkan dengan tanda koma (,)."></textarea>
                            </div>
                          </div>
                        </div>

                        <div class="text-end">
                          <button type="submit" class="btn btn-dblue fs-4"><i class="fa fa-save fa-lg"
                              aria-hidden="true"></i>
                            Simpan</button>
                        </div>
                      </div>
                  </div>
                  </form>
                </div>                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `);

  const finalResult = result.join('');
  return finalResult;
};

const createLikeButtonTemplate = () => `
  <button aria-label="favorite this kampus" id="likeButton" class="like">
    <i class="far fa-star" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unfavorite this kampus" id="likeButton" class="liked">
    <i class="fa fa-star" aria-hidden="true"></i>
  </button>
`;

function checkLink(link) {
  if (link.substr(0, 8) === 'https://') {
    return link;
  } if (link.substr(0, 4) === 'www.') {
    return link;
  }
  const addHttps = `https://${link}`;
  return addHttps;
}

function editKelasTersedia(data) {
  let result = '';
  const kelasTersedia = ['Reguler', 'Karyawan', 'Online'];
  const dataKelasChecked = [];
  const dataKelas = data.forEach((item) => {
    if (item) {
      dataKelasChecked.push(item);
    }
  });

  kelasTersedia.forEach((item, index) => {
    const templateResultChecked = `
    <div class="col-sm-6 col-md-4">
      <input type="checkbox" name="kelasTersedia" id="${item}" value="${item}"
      class="form-check-input" checked>
      <label for="${item}" class="form-check-label">${item}</label>
    </div>
    `;
    const templateResultUnchecked = `
    <div class="col-sm-6 col-md-4">
      <input type="checkbox" name="kelasTersedia" id="${item}" value="${item}"
      class="form-check-input">
      <label for="${item}" class="form-check-label">${item}</label>
    </div>
    `;
    if (item === dataKelasChecked[index]) {
      result += templateResultChecked;
    } else if (item === dataKelasChecked[index - 2]) {
      result += templateResultChecked;
    } else if (item === dataKelasChecked[index - 1]) {
      result += templateResultChecked;
    } else if (item === dataKelasChecked[index + 1]) {
      result += templateResultChecked;
    } else if (item === dataKelasChecked[index + 2]) {
      result += templateResultChecked;
    } else {
      result += templateResultUnchecked;
    }
  });
  return result;
}

function akreditasiKampus(data) {
  const dataAkreditasi = ['A', 'B', 'C', 'Baik', 'Sangat Baik', 'Unggul', 'Belum Terakreditasi'];
  const selectSpace = document.createElement('select');
  selectSpace.setAttribute('id', 'akreditasiKampus');
  selectSpace.classList.add('form-control', 'border-orange', 'w-100');
  let itemLoop = '';
  const filterData = dataAkreditasi
    .filter((item) => item !== data);
  const loopData = filterData
    .forEach((item) => {
      itemLoop += `<option value="${item}">${item}</option>`;
    });
  selectSpace.innerHTML = `<option value="${data}" selected>${data}</option>`;
  selectSpace.innerHTML += itemLoop;
  return selectSpace;
}

function jurusanItemWithLimit(data) {
  const jurusan = data.slice(0, 3).map((dataJurusan) => `${dataJurusan.namaJurusan}<hr class="m-0">`);
  const result = jurusan.join('');
  return result;
}

function jurusanSettingItemTemplate(data) {
  const result = data.map((jurusan) => `
    <div class="col-md-12 mb-3">
      <div class="card border-orange">
        <div class="card-body d-flex">
          <div class="thumb-container row justify-content-center">
            <div class="col-sm-6 col-md-4 my-auto">
              <h4 class="fw-bold"><a href="#/jurusan/:id" class="text-dark">${jurusan.namaJurusan}</a></h4>
            </div>
            <div class="col-sm-6 col-md-2 my-auto">
              <a href="#/jurusan/${jurusan.id}">
                <img src="./favicon.png" alt="${jurusan.namaJurusan}" class="thumb-img-detail">
              </a>
            </div>
            <div class="col-sm-6 col-md-2">
              <h4><u>Akreditasi</u></h4>
              <h2>${jurusan.akreditasi}</h2>
            </div>
            <div class="col-sm-6 col-md-2">
              <h4><u>Kelas Tersedia</u></h4>
              ${mappingKelasNamaJurusan(jurusan.kelas)}
            </div>
            <div class="col-md-2 d-flex align-items-center justify-content-around">
              <a href="#/info-jurusan/${jurusan.id}" class="text-info"><i class="fa fa-circle-info fa-4x"></i></a>
              <a href="#/delete-jurusan/${jurusan.id}" class="text-danger"><i class="fa fa-trash fa-4x"
                  aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);

  const finalResult = result.join('');
  return finalResult;
}

function kelasItem(data, separator = 'default') {
  let namaKelas = '';
  if (separator === 'span') {
    for (const i in data) {
      namaKelas += `<span class="text-muted">${data[i]}</span>`;
    }
    return namaKelas;
  }
  for (const i in data) {
    namaKelas += `${data[i]}<hr class="m-0">`;
  }
  return namaKelas;
}

// function kelasItemJurusan(data) {
//   const obj = data.map((map) => map)
// }

function mappingKelasNamaJurusan(data) {
  const mapJurusan = data.map((item) => `${item.name}`);
  const result = mapJurusan.join('<br>');
  return result;
}

function redirectWa(phone) {
  const date = new Date();
  const hour = date.getHours();
  let greeting;
  if (hour >= 18) {
    greeting = 'Selamat malam admin,';
  } else if (hour >= 15) {
    greeting = 'Selamat sore admin,';
  } else if (hour >= 12) {
    greeting = 'Selamat siang admin';
  } else if (hour >= 6) {
    greeting = 'Selamat pagi admin,';
  } else {
    greeting = 'Salam admin,';
  }

  const phoneNumber = phone.slice(1);
  const formatIndonesia = `62${phoneNumber}`;
  const result = `https://api.whatsapp.com/send/?phone=${formatIndonesia}&text=${greeting}%0ASaya%20ingin%20bertanya%20mengenai%20kampus%20ini" target="blank"`;

  return result;
}

function loopJurusan(kampus, data) {
  const jurusan = data.map((item) => `
  <div class="col-md-12">
    <div class="card border-orange my-2">
      <div class="card-body d-flex m-0 p-2 scroll-x">
        <div class="group-text">
          <h5 class="text-heading">${item.jenjang} - ${item.namaJurusan}</h5>
          <span class="alert alert-info rounded-pill p-1 fs-6">Akreditasi: ${item.akreditasi}</span>
        </div>
        <div class="group-text ps-1 ms-auto">
          <p class="text-muted">Biaya SPP</p>
          <h6 class="text-heading">${item.kelas[0].biayaSPP ? item.kelas[0].biayaSPP : '<span class="text-danger">No Data</span>'}</h6>
        </div>
      </div>
      <div class="card-footer bg-primary">
        <a href="/#/kampus/${kampus.id}/jurusan/${item.id}">
          <button class="btn btn-primary fw-bold w-100">Detail</button>
        </a>
      </div>
    </div>
  </div> 
  `);
  const result = jurusan.join('');
  return result;
}

function loopJurusanWithFilterHeading(data, idJurusan) {
  const jurusan = data.jurusan.filter((item) => item.id === idJurusan)
    .map((item) => `
    <span
      class="alert bg-transparent border-2 border-white rounded-pill text-white fw-bold py-1 px-3 d-inline-block my-1">${item.jenjang}</span>
    `);

  let spaceKelasTersedia = '';
  const kelasTersedia = data.jurusan
    .filter((item) => item.id === idJurusan)
    .map((item) => {
      const loopKelas = item.kelas.forEach((value) => {
        spaceKelasTersedia += `<span
        class="alert bg-transparent border-2 border-white rounded-pill text-white fw-bold py-1 px-2 d-inline-block my-1 mx-1">${value.name}</span>`;
      });

      return loopKelas;
    });

  const result = `${jurusan} ${spaceKelasTersedia}`;
  return result;
}

function loopJurusanNameAndPrice(data, idJurusan) {
  let spaceKelasTersedia = '';
  const kelasTersedia = data.jurusan
    .filter((item) => item.id === idJurusan)
    .map((item) => {
      const loopKelas = item.kelas.forEach((value) => {
        const createItemJurusanTemplate = `
        <div class="col-sm-12 col-md-6 col-lg-4 card shadow-sm p-3">
          <h5 class="text-heading py-1 px-2"> <i class="fa fa-building-circle-check text-primary"></i> ${value.name}</h5>
          <h5 class="text-secondary py-1 px-2">Rp. ${value.biayaSPP} </h5>
        </div>`;
        spaceKelasTersedia += createItemJurusanTemplate;
      });

      return loopKelas;
    });

  const result = spaceKelasTersedia;
  return result;
}

function itemsJurusanWithFilter(data, idJurusan) {
  const jurusan = data.jurusan
    .filter((item) => item.id === idJurusan)
    .map((item) => `
    <section id="detail-jurusan" class="container-fluid">
      <div class="row">
        <div class="col-md-8 mt-3">
          <div class="card bg-info border-orange">
            <div class="card-header alert-info text-center">
              <div class="d-flex scroll-x">
                <span><a href="/#/kampus/${data.id}/jurusan/${idJurusan}#pembelajaran" class="text-muted fw-bold text-decoration-none d-inline-block fs-5"
                    id="scrollPembelajaran">Pembelajaran</a></span>
                <span><a href="/#/kampus/${data.id}/jurusan/${idJurusan}#deskripsi" class="text-muted fw-bold text-decoration-none d-inline-block fs-5"
                    id="scrollProspek">Prospek Karir</a></span>
                <span><a href="/#/kampus/${data.id}/jurusan/${idJurusan}#prospek-karir" class="text-muted fw-bold text-decoration-none d-inline-block fs-5"
                    id="scrollPrice">Biaya</a></span>              
              </div>

            </div>
            <div class="card-body bg-light br row m-2">
            <div id="yangDipelajari" class="col-md-12 mb-4 p-3 bg-light shadow rounded">
            <h4 class="fw-bold text-muted text-center mb-2">Yang dipelajari</h4>
                <div class="row">
                ${item.mataKuliah ? splittingTextComma(item.mataKuliah, 'dipelajari') : `<div class="container-fluid">
                  <h2 class="text-center">Tidak ada data!</h2>
                  <div class="d-flex">
                    <img src="./images/no-data.png" alt="no-data" class="w-75 mx-auto">
                  </div>
                 </div>
                `}
                </div>
              </div>              
              
              <div id="prospekKarir" class="col-md-12 mb-4 p-3 bg-light shadow rounded">
              <h4 class="fw-bold text-muted text-center mb-2">Prospek Karir</h4>
                <div class="row">
                ${item.prospekKarir ? splittingTextComma(item.prospekKarir, 'karir') : `<div class="container-fluid">
                  <h2 class="text-center">Tidak ada data!</h2>
                  <div class="d-flex">
                    <img src="./images/no-data.png" alt="no-data" class="w-75 mx-auto">
                  </div>
                 </div>
                `}
                </div>
              </div>
              <div id="biaya" class="col-md-12 mb-4 p-3 bg-light shadow rounded">
              <h4 class="fw-bold text-muted text-center mb-2">Kelas dan Biaya SPP</h4>
                <div class="row p-2">
                ${item.kelas ? loopJurusanNameAndPrice(data, idJurusan) : `<div class="container-fluid">
                  <h2 class="text-center">Tidak ada data!</h2>
                  <div class="d-flex">
                    <img src="./images/no-data.png" alt="no-data" class="w-75 mx-auto">
                  </div>
                 </div>
                `}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-3">
          <div class="row">
            <div class="col-md-12">
              <div class="card border-orange">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12 col-lg-4">
                      <img src="${data.pictureId ? `${CONFIG.BASE_IMAGE_URL}/${data.pictureId}` : './images/default-school.png'}" alt="${data.name}" class="thumb-img-detail">
                    </div>
                    <div class="col-md-12 col-lg-8">
                      <div class="row">
                        <div class="col-md-12 col-lg-12">
                          <h5 class="text-heading">${data.name}</h5>
                        </div>
                        <div class="col-md-12 col-lg-12 mb-2">
                          <span class="alert alert-info px-2 py-1 d-inline-block rounded-pill my-1">Akreditasi: ${data.akreditasiKampus ? data.akreditasiKampus : 'Tidak tersedia'}</span>
                          <span class="alert alert-info px-3 py-1 d-inline-block rounded-pill my-1">${data.jenisKampus ? data.jenisKampus : 'Jenis Kampus'}</span>
                        </div>
                        <div class="col-md-12 col-lg-12 mb-2">
                          ${checkPmb(data.statusPmb)}                     
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <a href="${data.linkPendaftaran ? `${checkLink(data.linkPendaftaran)}" target="_blank"` : '/#/404"'}>
                        <button class="btn btn-primary w-100 mt-1 mb-1 p-2 fs-5"><i class="fab fa-wpforms fa-xl"></i> Link
                          Pendaftaran</button></a>
                    </div>
                    <div class="col-md-12">
                      <a href="${data.telepon ? redirectWa(data.telepon) : '/#/404"'}>
                        <button class="btn btn-success w-100 mt-1 mb-1 p-2 fs-5"><i class="fab fa-whatsapp fa-xl"
                            aria-hidden="true"></i> Tanya via WhatsApp</button></a>
                    </div>
                  </div>
                </div>          
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `);

  return jurusan;
}

function splittingTextComma(data, typeItem = 'dipelajari') {
  const splitText = data.split(',');
  let result = '';

  if (typeItem === 'dipelajari') {
    const mergeText = splitText.forEach((item) => {
      const templateTextDipelajari = `<div class="col-sm-6 col-md-4 my-2"><i class="fa fa-book fa-xl text-primary" aria-hidden="true"></i>
  ${item}</div>`;
      result += templateTextDipelajari;
    });
    return result;
  } if (typeItem === 'karir') {
    const mergeText = splitText.forEach((item) => {
      const templateTextKarir = `<div class="col-sm-6 col-md-4 my-2"><i class="fa fa-briefcase fa-xl text-primary"
      aria-hidden="true"></i> ${item}</div>`;
      result += templateTextKarir;
    });
    return result;
  }
  return 'Error!';
}

function checkPmb(data) {
  if (data === 'Buka') {
    return '<p><span class="alert alert-success text-white p-1 rounded-pill px-2 py-1">Dibuka</span></p>';
  }
  return '<p><span class="alert alert-warning text-white p-1 rounded-pill px-2 py-1">Ditutup</span></p>';
}

export {
  heroText,
  searchBar,
  createListKampusItemTemplate,
  createListKampusItemTemplateDashboard,
  createListKampusItemTemplateDashboardAdmin,
  createKampusDetailTemplate,
  createKampusDetailForm,
  createKampusDetailFormWithSubmit,
  createSettingJurusanContainerTemplate,
  createJurusanDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createListJurusanItemTemplate,
};
