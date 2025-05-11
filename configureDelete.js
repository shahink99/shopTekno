
  function confirmDelete(message = 'آیا مطمئن هستی که می‌خوای این آیتم حذف بشه؟', onConfirm = () => {}) {
    Swal.fire({
      title: 'تایید حذف',
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'بله',
      cancelButtonText: 'خیر',
      reverseButtons: true,
      customClass: {
        popup: 'swal2-rtl-toast'
      },
      didOpen: () => {
        const modal = Swal.getPopup();
        if (modal) {
          modal.style.direction = 'rtl';
          modal.style.fontFamily = 'Vazirmatn, sans-serif';
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm(); // کاری که باید بعد از تایید انجام بشه
        showToast('با موفقیت حذف شد!', 'success' , '#27AE60');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        showToast('حذف لغو شد.', 'info', 'gray');
      }
    });
  }
