
  function showToast(message, icon = 'success', backgrounColor = '#fff' ,color='#fff', position = 'top', timer = 3000 ) {
    Swal.fire({
      toast: true,
      position: position,
      icon: icon,
      title: message,
      showConfirmButton: false,
      timer: timer,
      timerProgressBar: true,
      background:backgrounColor,
      color,
      customClass: {
        popup: 'swal2-rtl-toast'
      },
      didOpen: () => {
        const toast = Swal.getPopup();
        if (toast) {
          toast.style.direction = 'rtl';
          toast.style.fontFamily = 'Vazirmatn, sans-serif';
        }
      }
    });
  }
