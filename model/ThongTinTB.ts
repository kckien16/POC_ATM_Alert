interface TT{
    imei: number,
    sim: string,
    loaiTB: string,
    tenTB: string,
    diaChi: string,
    ngayKH : string
}

const ThongTin : TT[] = [
    {
        imei: 4456456455675,
        sim: "0369756908" ,
        loaiTB: 'Thiết bị cảnh báo dành cho ATM',
        tenTB: 'ATM - 123124234234',
        diaChi: 'Âu Cơ, P.8, Q.Tân Bình, TP.HCM',
        ngayKH: '16/09/2019',
        
    }
];

export {TT , ThongTin}; 