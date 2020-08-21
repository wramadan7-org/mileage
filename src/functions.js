const menghitungJarak = () => {
	let jamAw;
	let menitAw;
	let detikAw;

	let jamAk;
	let menitAk;
	let detikAk;

	const waktu = new Date(2020, 8, 20, 10, 12, 21)
	const waktuAkhir = new Date(2020, 8, 20, 12)



	jamAw = waktu.getHours()
	menitAw = waktu.getMinutes()
	detikAw = waktu.getSeconds()

	jamAk = waktuAkhir.getHours()
	menitAk = waktuAkhir.getMinutes()
	detikAk = waktuAkhir.getSeconds()

	/*
	let selisihWaktu = (waktuAkhir - waktu) / 1000 //satuan detik
	let konversi5mntKeDetik = 5 * 60 //konversi 5 menit ke detik


	let kecepatanAwal = 6
	let waktuSementara = selisihWaktu - konversi5mntKeDetik //lima metit dari 10:12
	let kecepatanSementara = kecepatanAwal + 2 //kecepatan setelah 5mnt dari 10:12
	let konversi10mntKeDetik = 10 * 60
	let kecepatanDinaikkan = waktuSementara / konversi10mntKeDetik

	let jarakSebelumnya = waktuSementara * kecepatanSementara
	let jarakKeseluruhan = jarakSebelumnya + (waktuSementara * kecepatanDinaikkan)

	console.log(jarakKeseluruhan + " m/detik")
	*/

	let selisihWaktu = (waktuAkhir - waktu) / 1000 / 60 /60 //satuan jam
	let konversi5mntKeJam = 5 / 60 //konversi 5 menit ke detik


	let kecepatanAwal = 6 / 10 / 10 / 10
	let waktuSementara = selisihWaktu - konversi5mntKeJam //lima metit dari 10:12
	let kecepatanSementara = kecepatanAwal + (2 / 10 / 10 / 10) //kecepatan setelah 5mnt dari 10:12
	let konversi10mntKeJam = 10 / 60

	let l =  ""//menampung perulangan
	let row = 0
	for (let i = konversi10mntKeJam; i <= waktuSementara; i+=konversi10mntKeJam) {
		l += i
		l += '\n'
		row++
	}

	let kecepatanDinaikkan = waktuSementara - ((1 / 10 / 10 / 10) * row) //setiap 10mnt kecepatan tambah 1

	let jarakSebelumnya = waktuSementara * kecepatanSementara
	let jarakKeseluruhan = jarakSebelumnya + (waktuSementara * kecepatanDinaikkan)
	
	//PR, MENGHITUNG JUMLAH ROW/COLOM/BARIS

	console.log("Jarak yang ditempuh selama jam 10:12:21 sampai 12:00:00 adalah " + Math.round(jarakKeseluruhan) + " km/jam")

	//Math adalah object yg berisi fungsi2 matematika
	//round() untuk membulatkan bilangan dari nilai yg terdekat, bisa keatas/bawah
	//floor() keatas
	//ceil() kebawah
	
}
menghitungJarak()