import { heroText } from '../templates/template-creator';

const DashboardUser = {
  async render() {
    return `
    <div class="hero-text container-fluid">
    </div>
    <div class="bg-info p-3">
      <div class="head-profile container-fluid mt-2">
        <div class="card border-orange bg-light">
          <div class="row alert-info m-3">
            <div class="col-md-2 p-3">
              <img src="./favicon.png" alt="" class="thumb-img-detail">
            </div>
            <div class="col-md-5 p-3 my-auto ml-auto">
              <h4 class="fw-bold text-muted">Nama User</h4>
              <p class="fw-bold text-muted">Siswa di SMAN 1 Aceh</p>
            </div>
            <div class="col-md-5 p-3 my-auto">
              <a href="/#/edit-profile/:id" class="link text-dark text-decoration-none fs-5 py-2 fw-bold">
                <i class="fa fa-edit fa-2x text-muted" aria-hidden="true"></i> <span class="text-muted ">Atur data
                  dirimu!</span>
              </a>
            </div>
          </div>
        </div>

      </div>
      <div class="container-fluid mt-3">
        <div class="card">
          <div class="card-header alert-info">
            <div class="d-flex justify-content-around alert-info py-2">
              <a class="text-decoration-none text-muted border-bottom border-info border-2 fw-bold text-center" role="button" data-bs-toggle="collapse" href="#/dashboard/#kampusFavorite"
                aria-expanded="true" data-bs-target="#kampusFavorite" 
                aria-controls="kampusFavorite" id="btnKampusFavorite">
                <h4>Kampus Favorite</h4>
              </a>
              <a class="text-decoration-none text-muted text-center" role="button" data-bs-toggle="collapse" href="#/dashboard/#prodiFavorite"
                data-bs-target="#prodiFavorite" aria-expanded="true" aria-controls="prodiFavorite"
                id="btnProdiFavorite">
                <h4>Prodi Favorite</h4>
              </a>
            </div>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="collapse show" id="kampusFavorite">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-12 mb-3">
                        <div class="card border-orange">
                          <div class="card-body d-flex">
                            <div class="thumb-container row">
                              <div class="col-md-1">
                                <a href="#/kampus/:id">
                                  <img src="./favicon.png" alt="" class="thumb-img">
                                </a>
                              </div>
                              <div class="col-md-3">
                                <h4 class="fw-bold"><a href="#/kampus/:id" class="text-dark">Nama Universitas</a></h4>
                                <p><i class="fas fa-location-dot" aria-hidden="true"></i> Kota</p>
                                <span class="alert alert-info p-0 ps-1 pe-1 mb-3">Akreditasi A</span>
                                <span class="alert alert-info p-0 ps-1 pe-1">PTN</span>
                              </div>
                              <div class="col-md-2">
                                <h4><u>Kelas Tersedia</u></h4>
                                Reguler<br>
                                Karyawan<br>
                                Online<br>
                                Umum
                              </div>
                              <div class="col-md-2">
                                <h4><u>Prodi</u></h4>
                                Teknik Informatika<br>
                                Sistem Informasi<br>
                                Ilmu Hukum<br>
                                <a href="#"><button class="btn alert-info p-2">Selengkapnya</button></a>
                              </div>
                              <div class="col-md-2">
                                <h4><u>Status PMB</u></h4>
                                <p><span class="alert alert-success text-white p-1">Dibuka</span></p>
                              </div>
                              <div class="col-md-2 d-flex align-items-center justify-content-around">
                                <a href="#/kampus/:id" class="text-info"><i
                                    class="fa fa-circle-info fa-4x"></i></a>
                                <a href="#/delete-kampus/:id" class="text-danger"><i class="fa fa-trash fa-4x"
                                    aria-hidden="true"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
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
            </div>
            <div class="col-md-12">
              <div class="collapse" id="prodiFavorite">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12 mb-3">
                      <div class="card border-orange">
                        <div class="card-body d-flex">
                          <div class="thumb-container row justify-content-center">
                            <div class="col-md-4 my-auto">
                              <h4 class="fw-bold"><a href="#/prodi/id" class="text-dark">Nama Program Studi</a></h4>
                            </div>
                            <div class="col-md-2 my-auto">
                              <a href="#/prodi/id">
                                <img src="./favicon.png" alt="" class="thumb-img-detail">
                              </a>
                            </div>
                            <div class="col-md-2">
                              <h4><u>Akreditasi</u></h4>
                              <h2>A</h2>
                            </div>
                            <div class="col-md-2">
                              <h4><u>Kelas Tersedia</u></h4>
                              Reguler<br>
                              Karyawan<br>
                              Online<br>
                            </div>
                            <div class="col-md-2 d-flex align-items-center justify-content-around">
                              <a href="#/prodi/:id" class="text-info"><i
                                  class="fa fa-circle-info fa-4x"></i></a>
                              <a href="#/delete-prodi/:id" class="text-danger"><i class="fa fa-trash fa-4x"
                                  aria-hidden="true"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
          </div>
        </div>
      </div>
    </div>
    `;
  },
  async afterRender() {
    const heroEl = document.querySelector('.hero-text');
    heroEl.innerHTML = heroText('Yuk lihat Kampus dan Jurusan Favoritemu!');

    const btnKampusFavorite = document.getElementById('btnKampusFavorite');
    const btnProdiFavorite = document.getElementById('btnProdiFavorite');

    const kampusFavorite = document.getElementById('kampusFavorite');
    const prodiFavorite = document.getElementById('prodiFavorite');

    btnKampusFavorite.addEventListener('click', (e) => {
      e.preventDefault();
      prodiFavorite.classList.remove('show');
      btnProdiFavorite.classList.remove('border-bottom', 'border-info', 'border-2', 'fw-bold');
      btnKampusFavorite.classList.add('border-bottom', 'border-info', 'border-2', 'fw-bold');
    });
    btnProdiFavorite.addEventListener('click', (e) => {
      e.preventDefault();
      kampusFavorite.classList.remove('show');
      btnKampusFavorite.classList.remove('border-bottom', 'border-info', 'border-2', 'fw-bold');
      btnProdiFavorite.classList.add('border-bottom', 'border-info', 'border-2', 'fw-bold');
    });
  },
};

export default DashboardUser;