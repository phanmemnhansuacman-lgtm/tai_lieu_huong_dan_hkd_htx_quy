// sidebars.js
// 3 sidebar riêng biệt cho 3 mô hình: Hộ kinh doanh, Quỹ tài chính, Hợp tác xã

const hoKinhDoanhSidebar = [
  {
    type: 'category',
    label: 'HỘ KINH DOANH',
    items: [
      {
        type: 'category',
        label: 'PHẦN I - THIẾT LẬP CHUNG',
        items: [
          {
            type: 'category',
            label: '1.1. Cài đặt và các thiết lập căn bản',
            items: [
              // ⚠️ Tên file bị cắt trong VS Code Explorer, kiểm tra lại tên đầy đủ
              'ho_kinh_doanh/phan-1-thiet-lap-chung/1.1-cai-dat-va-cac-thiet-lap-can-ban/1.1.1-cai-dat-chuong-trinh-phan-mem-acman-9.1',
              'ho_kinh_doanh/phan-1-thiet-lap-chung/1.1-cai-dat-va-cac-thiet-lap-can-ban/1.1.2-thiet-lap-co-so-du-lieu-ke-toan',
              {
                type: 'category',
                label: '1.1.3. Phân quyền và quản trị dữ liệu',
                items: [
                  'ho_kinh_doanh/phan-1-thiet-lap-chung/1.1-cai-dat-va-cac-thiet-lap-can-ban/1.1.3-phan-quyen-va-quan-tri-du-lieu/1.1.3.1-quan-ly-nguoi-su-dung',
                  'ho_kinh_doanh/phan-1-thiet-lap-chung/1.1-cai-dat-va-cac-thiet-lap-can-ban/1.1.3-phan-quyen-va-quan-tri-du-lieu/1.1.3.2-thay-doi-mat-khau',
                  'ho_kinh_doanh/phan-1-thiet-lap-chung/1.1-cai-dat-va-cac-thiet-lap-can-ban/1.1.3-phan-quyen-va-quan-tri-du-lieu/1.1.3.3-nhat-ky-lam-viec',
                ],
              },
              'ho_kinh_doanh/phan-1-thiet-lap-chung/1.1-cai-dat-va-cac-thiet-lap-can-ban/1.1.4-tro-giup',
            ],
          },
          {
            type: 'category',
            label: '1.2. Thiết lập danh mục trên phần mềm',
            items: [
              'ho_kinh_doanh/phan-1-thiet-lap-chung/1.2-thiet-lap-danh-muc-tren-phan-mem/1.2.1-danh-muc-phim-tat',
              'ho_kinh_doanh/phan-1-thiet-lap-chung/1.2-thiet-lap-danh-muc-tren-phan-mem/1.2.2-danh-muc-khach-hang',
              'ho_kinh_doanh/phan-1-thiet-lap-chung/1.2-thiet-lap-danh-muc-tren-phan-mem/1.2.3-danh-muc-ncc',
              {
                type: 'category',
                label: '1.2.4. Thiết lập chung',
                items: [
                  // ⚠️ Tên file 1.2.4.1 bị cắt, kiểm tra lại tên đầy đủ
                  'ho_kinh_doanh/phan-1-thiet-lap-chung/1.2-thiet-lap-danh-muc-tren-phan-mem/1.2.4-thiet-lap-chung/1.2.4.1-thiet-lap-danh-so-chung-tu-tu-dong',
                  'ho_kinh_doanh/phan-1-thiet-lap-chung/1.2-thiet-lap-danh-muc-tren-phan-mem/1.2.4-thiet-lap-chung/1.2.4.2-thiet-lap-dong-bo-ma',
                  'ho_kinh_doanh/phan-1-thiet-lap-chung/1.2-thiet-lap-danh-muc-tren-phan-mem/1.2.4-thiet-lap-chung/1.2.4.3-thiet-lap-xuat-gia-von',
                ],
              },
            ],
          },
          {
            type: 'category',
            label: '1.3. Nguyên tắc nhập liệu trên phần mềm kế toán',
            link: {
              type: 'doc',
              id: 'ho_kinh_doanh/phan-1-thiet-lap-chung/1.3-nguyen-tac-nhap-lieu/1.3-index',
            },
            items: [
              'ho_kinh_doanh/phan-1-thiet-lap-chung/1.3-nguyen-tac-nhap-lieu/1.3.1-so-du-dau-ky',
              'ho_kinh_doanh/phan-1-thiet-lap-chung/1.3-nguyen-tac-nhap-lieu/1.3.2-cap-nhat-chung-tu-phat-sinh',
              {
                type: 'category',
                label: '1.3.3. Nghiệp vụ tự động',
                items: [
                  'ho_kinh_doanh/phan-1-thiet-lap-chung/1.3-nguyen-tac-nhap-lieu/1.3.3-nghiep-vu-tu-dong-tren-pm/1.3.3.1-xuat-kho-tu-dong',
                  'ho_kinh_doanh/phan-1-thiet-lap-chung/1.3-nguyen-tac-nhap-lieu/1.3.3-nghiep-vu-tu-dong-tren-pm/1.3.3.2-khau-hao-tscd',
                  'ho_kinh_doanh/phan-1-thiet-lap-chung/1.3-nguyen-tac-nhap-lieu/1.3.3-nghiep-vu-tu-dong-tren-pm/1.3.3.3-kiem-soat-so-lieu',
                ],
              },
              {
                type: 'category',
                label: '1.3.4. Chứng từ, sổ kế toán',
                items: [
                  'ho_kinh_doanh/phan-1-thiet-lap-chung/1.3-nguyen-tac-nhap-lieu/1.3.4-chung-tu-so-ke-toan/1.3.4.1-in-chung-tu-ke-toan',
                  'ho_kinh_doanh/phan-1-thiet-lap-chung/1.3-nguyen-tac-nhap-lieu/1.3.4-chung-tu-so-ke-toan/1.3.4.2-phat-hanh-so-ke-toan',
                ],
              },
              'ho_kinh_doanh/phan-1-thiet-lap-chung/1.3-nguyen-tac-nhap-lieu/1.3.5-to-khai-thue',
            ],
          },
          {
            type: 'category',
            label: '1.4. Hệ thống phần mềm tích hợp',
            items: [
              'ho_kinh_doanh/phan-1-thiet-lap-chung/1.4-he-thong-pm-tich-hop/1.4.1-pm-hddt',
              {
                type: 'category',
                label: '1.4.2. Phần mềm tải, import hóa đơn và sao kê ngân hàng',
                items: [
                  'ho_kinh_doanh/phan-1-thiet-lap-chung/1.4-he-thong-pm-tich-hop/1.4.2-tai-va-ip-hoadon/1.4.2.1-tai-va-ip-hoadon-tct',
                  'ho_kinh_doanh/phan-1-thiet-lap-chung/1.4-he-thong-pm-tich-hop/1.4.2-tai-va-ip-hoadon/1.4.2.2-tai-va-ip-hoadon-website',
                  'ho_kinh_doanh/phan-1-thiet-lap-chung/1.4-he-thong-pm-tich-hop/1.4.2-tai-va-ip-hoadon/1.4.2.3-ip-sao-ke-ngan-hang',
                ],
              },
            ],
          },
          {
            type: 'category',
            label: '1.5. Phần mềm ACMan khác',
            link: {
              type: 'doc',
              id: 'ho_kinh_doanh/phan-1-thiet-lap-chung/1.5-phan-mem-acman-khac',
            },
            items: [],
          },
        ],
      },
      {
        type: 'category',
        label: 'PHẦN II - HƯỚNG DẪN NHẬP LIỆU VÀ HẠCH TOÁN',
        items: [
          'ho_kinh_doanh/phan-2-thuc-hanh/2.1-dinh-khoan',
          {
            type: 'category',
            label: '2.2. Hướng dẫn nhập liệu',
            items: [
              'ho_kinh_doanh/phan-2-thuc-hanh/2.2-huong-dan-nhap-lieu/2.2.1-tao-co-so-du-lieu',
              'ho_kinh_doanh/phan-2-thuc-hanh/2.2-huong-dan-nhap-lieu/2.2.2-nhap-sodu-dau-ky',
              'ho_kinh_doanh/phan-2-thuc-hanh/2.2-huong-dan-nhap-lieu/2.2.3-nhap-nghiep-vu-phat-sinh',
            ],
          },
          'ho_kinh_doanh/phan-2-thuc-hanh/2.3-in-chung-tu',
          'ho_kinh_doanh/phan-2-thuc-hanh/2.4-to-khai-thue-hkd',
        ],
      },
      {
        type: 'doc',
        id: 'ho_kinh_doanh/phan-3-xu-ly-loi/xu-ly-loi',
        label: 'PHẦN III - XỬ LÝ LỖI',
      },
    ],
  },
];

// quyTaiChinhSidebar và hopTacXaSidebar sẽ thêm vào đây khi có outline nội dung.
// Docusaurus không cho phép khai báo sidebar/category rỗng, nên tạm thời
// chưa khai báo 2 sidebar này (xem thêm ghi chú ở docusaurus.config.js).

// hopTacXaSidebar cho mô hình HỢP TÁC XÃ
// hopTacXaSidebar — đã cập nhật trỏ sang cấu trúc mới hop_tac_xa_chuan
const hopTacXaSidebar = [
  {
    type: 'category',
    label: 'HỢP TÁC XÃ',
    items: [
      {
  type: 'category',
  label: 'PHẦN I - CÀI ĐẶT',
  items: [
    'hop_tac_xa_chuan/phan_1_cai_dat/1.1_cai_dat',
    'hop_tac_xa_chuan/phan_1_cai_dat/1.2_thiet_lap_co_so_du_lieu_ke_toan',
    {
      type: 'category',
      label: '1.3. Phân quyền và quản trị dữ liệu',
      items: [
        'hop_tac_xa_chuan/phan_1_cai_dat/1.3_phan_quyen_va_quan_tri_du_lieu/1.3.1_quan_ly_nguoi_su_dung',
        'hop_tac_xa_chuan/phan_1_cai_dat/1.3_phan_quyen_va_quan_tri_du_lieu/1.3.2_thay_doi_mat_khau',
        'hop_tac_xa_chuan/phan_1_cai_dat/1.3_phan_quyen_va_quan_tri_du_lieu/1.3.3_nhat_ky_lam_viec',
      ],
    },
    'hop_tac_xa_chuan/phan_1_cai_dat/1.4_he_thong_phan_mem_khac',
  ],
},
      {
        type: 'category',
        label: 'PHẦN II - THIẾT LẬP CHUNG VÀ SỐ DƯ ĐẦU KỲ',
        items: [
          {
            type: 'category',
            label: '2.1. Thiết lập chung',
            items: [
              {
                type: 'category',
                label: '2.1.1. Thiết lập danh mục trên phần mềm',
                items: [
                  'hop_tac_xa_chuan/phan_2_thiet_lap_chung_va_so_du_dau_ky/2.1_thiet_lap_chung/2.1.1_thiet_lap_danh_muc_tren_phan_mem/2.1.1.1_danh_muc_phim_tat',
                  'hop_tac_xa_chuan/phan_2_thiet_lap_chung_va_so_du_dau_ky/2.1_thiet_lap_chung/2.1.1_thiet_lap_danh_muc_tren_phan_mem/2.1.1.2_danh_muc_khach_hang',
                  'hop_tac_xa_chuan/phan_2_thiet_lap_chung_va_so_du_dau_ky/2.1_thiet_lap_chung/2.1.1_thiet_lap_danh_muc_tren_phan_mem/2.1.1.3_danh_muc_ncc',
                ],
              },
              {
                type: 'category',
                label: '2.1.2. Thiết lập chung',
                items: [
                  'hop_tac_xa_chuan/phan_2_thiet_lap_chung_va_so_du_dau_ky/2.1_thiet_lap_chung/2.1.2_thiet_lap_chung/2.1.2.1_thiet_lap_danh_so_chung_tu_tu_dong',
                  'hop_tac_xa_chuan/phan_2_thiet_lap_chung_va_so_du_dau_ky/2.1_thiet_lap_chung/2.1.2_thiet_lap_chung/2.1.2.2_thiet_lap_ket_chuyen_tu_dong',
                  'hop_tac_xa_chuan/phan_2_thiet_lap_chung_va_so_du_dau_ky/2.1_thiet_lap_chung/2.1.2_thiet_lap_chung/2.1.2.3_thiet_lap_dong_bo_ma',
                  'hop_tac_xa_chuan/phan_2_thiet_lap_chung_va_so_du_dau_ky/2.1_thiet_lap_chung/2.1.2_thiet_lap_chung/2.1.2.4_thiet_lap_xuat_gia_von',
                ],
              },
            ],
          },
          {
            type: 'category',
            label: '2.2. Nguyên tắc nhập liệu',
            link: {
              type: 'doc',
              id: 'hop_tac_xa_chuan/phan_2_thiet_lap_chung_va_so_du_dau_ky/2.2_nguyen_tac_nhap_lieu/2.2_index',
            },
            items: [
              'hop_tac_xa_chuan/phan_2_thiet_lap_chung_va_so_du_dau_ky/2.2_nguyen_tac_nhap_lieu/2.2.1_so_du_dau_ky',
              'hop_tac_xa_chuan/phan_2_thiet_lap_chung_va_so_du_dau_ky/2.2_nguyen_tac_nhap_lieu/2.2.2_cap_nhat_chung_tu_phat_sinh',
              {
                type: 'category',
                label: '2.2.3. Nghiệp vụ tự động trên phần mềm',
                items: [
                  'hop_tac_xa_chuan/phan_2_thiet_lap_chung_va_so_du_dau_ky/2.2_nguyen_tac_nhap_lieu/2.2.3_nghiep_vu_tu_dong_tren_pm/2.2.3.1_xuat_kho_tu_dong',
                  'hop_tac_xa_chuan/phan_2_thiet_lap_chung_va_so_du_dau_ky/2.2_nguyen_tac_nhap_lieu/2.2.3_nghiep_vu_tu_dong_tren_pm/2.2.3.2_phan_bo_chi_phi_chung',
                  'hop_tac_xa_chuan/phan_2_thiet_lap_chung_va_so_du_dau_ky/2.2_nguyen_tac_nhap_lieu/2.2.3_nghiep_vu_tu_dong_tren_pm/2.2.3.3_khau_hao_tscd',
                  'hop_tac_xa_chuan/phan_2_thiet_lap_chung_va_so_du_dau_ky/2.2_nguyen_tac_nhap_lieu/2.2.3_nghiep_vu_tu_dong_tren_pm/2.2.3.4_phan_bo_cccd',
                  'hop_tac_xa_chuan/phan_2_thiet_lap_chung_va_so_du_dau_ky/2.2_nguyen_tac_nhap_lieu/2.2.3_nghiep_vu_tu_dong_tren_pm/2.2.3.5_tinh_gia_thanh',
                  'hop_tac_xa_chuan/phan_2_thiet_lap_chung_va_so_du_dau_ky/2.2_nguyen_tac_nhap_lieu/2.2.3_nghiep_vu_tu_dong_tren_pm/2.2.3.6_ket_chuyen_tu_dong',
                  'hop_tac_xa_chuan/phan_2_thiet_lap_chung_va_so_du_dau_ky/2.2_nguyen_tac_nhap_lieu/2.2.3_nghiep_vu_tu_dong_tren_pm/2.2.3.7_kiem_soat_so_lieu',
                ],
              },
              {
                type: 'category',
                label: '2.2.4. Chứng từ, sổ kế toán',
                items: [
                  'hop_tac_xa_chuan/phan_2_thiet_lap_chung_va_so_du_dau_ky/2.2_nguyen_tac_nhap_lieu/2.2.4_chung_tu_so_ke_toan/2.2.4.1_in_chung_tu_ke_toan',
                  'hop_tac_xa_chuan/phan_2_thiet_lap_chung_va_so_du_dau_ky/2.2_nguyen_tac_nhap_lieu/2.2.4_chung_tu_so_ke_toan/2.2.4.2_phat_hanh_so_ke_toan',
                ],
              },
              'hop_tac_xa_chuan/phan_2_thiet_lap_chung_va_so_du_dau_ky/2.2_nguyen_tac_nhap_lieu/2.2.5_bao_cao_tai_chinh',
              'hop_tac_xa_chuan/phan_2_thiet_lap_chung_va_so_du_dau_ky/2.2_nguyen_tac_nhap_lieu/2.2.6_to_khai_thue',
              'hop_tac_xa_chuan/phan_2_thiet_lap_chung_va_so_du_dau_ky/2.2_nguyen_tac_nhap_lieu/2.2.7_cac_ham_thong_minh',
            ],
          },
          'hop_tac_xa_chuan/phan_2_thiet_lap_chung_va_so_du_dau_ky/2.3_bang_he_thong_tai_khoan_tt71',
          'hop_tac_xa_chuan/phan_2_thiet_lap_chung_va_so_du_dau_ky/2.4_so_du_dau_ky',
        ],
      },
      {
        type: 'category',
        label: 'PHẦN III - NGHIỆP VỤ PHÁT SINH',
        items: [
          'hop_tac_xa_chuan/phan_3_nghiep_vu_phat_sinh/3.1-dinh-khoan',
          'hop_tac_xa_chuan/phan_3_nghiep_vu_phat_sinh/3.2_nhap_nghiep_vu_phat_sinh',
          {
            type: 'category',
            label: '3.3. Hệ thống phần mềm tích hợp',
            items: [
              'hop_tac_xa_chuan/phan_3_nghiep_vu_phat_sinh/3.3_he_thong_pm_tich_hop/3.3.1_hddt',
              {
                type: 'category',
                label: '3.3.2. Tải và import hóa đơn',
                items: [
                  'hop_tac_xa_chuan/phan_3_nghiep_vu_phat_sinh/3.3_he_thong_pm_tich_hop/3.3.2_tai_va_ip_hoadon/3.3.2.1_tai_va_ip_hoadon_tct',
                  'hop_tac_xa_chuan/phan_3_nghiep_vu_phat_sinh/3.3_he_thong_pm_tich_hop/3.3.2_tai_va_ip_hoadon/3.3.2.2_tai_va_ip_hoadon_website',
                  'hop_tac_xa_chuan/phan_3_nghiep_vu_phat_sinh/3.3_he_thong_pm_tich_hop/3.3.2_tai_va_ip_hoadon/3.3.2.3_ip_sao_ke_ngan_hang',
                ],
              },
              {
                type: 'category',
                label: '3.3.3. Phần mềm nhân sự',
                items: [
                  'hop_tac_xa_chuan/phan_3_nghiep_vu_phat_sinh/3.3_he_thong_pm_tich_hop/3.3.3_pm_nhan_su/3.3.3.1_co_che_chinh_sach',
                  'hop_tac_xa_chuan/phan_3_nghiep_vu_phat_sinh/3.3_he_thong_pm_tich_hop/3.3.3_pm_nhan_su/3.3.3.2_mo_ta_cong_viec',
                  'hop_tac_xa_chuan/phan_3_nghiep_vu_phat_sinh/3.3_he_thong_pm_tich_hop/3.3.3_pm_nhan_su/3.3.3.3_thong_tin_nhan_su',
                  'hop_tac_xa_chuan/phan_3_nghiep_vu_phat_sinh/3.3_he_thong_pm_tich_hop/3.3.3_pm_nhan_su/3.3.3.4_thiet_lap_chinh_sach_tien_luong',
                  'hop_tac_xa_chuan/phan_3_nghiep_vu_phat_sinh/3.3_he_thong_pm_tich_hop/3.3.3_pm_nhan_su/3.3.3.5_bang_cham-cong',
                  'hop_tac_xa_chuan/phan_3_nghiep_vu_phat_sinh/3.3_he_thong_pm_tich_hop/3.3.3_pm_nhan_su/3.3.3.6_bang_tinh_luong',
                  'hop_tac_xa_chuan/phan_3_nghiep_vu_phat_sinh/3.3_he_thong_pm_tich_hop/3.3.3_pm_nhan_su/3.3.3.7_tai_khoan_tich_hop_luong',
                ],
              },
            ],
          },
          'hop_tac_xa_chuan/phan_3_nghiep_vu_phat_sinh/3.4_chung_tu_ke_toan',
          'hop_tac_xa_chuan/phan_3_nghiep_vu_phat_sinh/3.5_so_ke_toan',
          'hop_tac_xa_chuan/phan_3_nghiep_vu_phat_sinh/3.6_phat_hanh_bctc',
          'hop_tac_xa_chuan/phan_3_nghiep_vu_phat_sinh/3.7_bao_cao_thue',
        ],
      },
    ],
  },
];

const sidebars = {
  hoKinhDoanhSidebar,
  hopTacXaSidebar,
};

module.exports = sidebars;