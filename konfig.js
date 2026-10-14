/* Sambungan pelayan.

   Jejak TP English berkongsi PROJEK Supabase dengan Jejak TP Matematik (pelan percuma
   terhad kepada 2 projek), tetapi menggunakan jadual dan fungsi berasingan berawalan je_
   (skema.sql). Rekod murid, kelas dan Premium Sejarah tidak bercampur dengan jm_ Matematik.
   Akaun log masuk (auth) dikongsi: guru Matematik boleh log masuk dengan e-mel yang sama,
   tetapi profil dan Premium Sejarah disimpan dalam je_guru.

   Kunci di bawah ialah kunci ANON Supabase. Ia memang direka untuk berada dalam pelayar dan
   tidak rahsia. Perlindungan sebenar datang daripada RLS dan fungsi dalam skema.sql.
   Kunci service_role TIDAK BOLEH SEKALI-KALI diletakkan di sini. */
window.CN_AWAN = {
  url: "https://noaeagitwklnpmyhhhtn.supabase.co",
  kunci: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vYWVhZ2l0d2tsbnBteWhoaHRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAxNTU4MDEsImV4cCI6MjEwNTczMTgwMX0.Z7ltdqSgxAlVVSlzDuPvUnFdpStY5UWHbdOqXS8BtB0",
  /* Butang bayar toyyibPay (FPX). Premium diaktifkan oleh Edge Function "bayar-english". */
  bayarOnline: true
};
