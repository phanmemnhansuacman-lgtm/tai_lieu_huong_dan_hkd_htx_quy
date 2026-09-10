import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

// Đổi tên/đường dẫn ảnh sticker tại đây.
// Đặt file ảnh (png/gif/svg) vào: static/img/mascot-wave.png
const MASCOT_SRC = '/img/mascot-wave.png';

const STORAGE_KEY = 'acman_welcome_banner_dismissed_v1';

export default function WelcomeBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Chỉ chạy ở client (tránh lỗi SSR của Docusaurus)
    if (typeof window === 'undefined') return;
    const dismissed = window.localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, '1');
    }
  };

  if (!visible) return null;

  return (
    <div className={styles.bannerOverlay} role="dialog" aria-live="polite">
      <div className={styles.banner}>
        <button
          className={styles.closeBtn}
          onClick={handleClose}
          aria-label="Đóng"
        >
          ×
        </button>

        <div style={{
  width: 48,
  height: 48,
  borderRadius: '50%',
  background: 'var(--ifm-color-primary-lightest)', // hoặc màu tím ACMan bạn đang dùng
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 24,
  flexShrink: 0,
}}>
  🙋
</div>

        <div className={styles.textWrap}>
          <p className={styles.greeting}>👋 Chào mừng bạn đến với ACMan!</p>
          <p className={styles.subtext}>
            Cùng khám phá tài liệu hướng dẫn Hộ kinh doanh - Hợp tác xã - Quỹ
            tài chính ngay nhé.
          </p>
        </div>
      </div>
    </div>
  );
}