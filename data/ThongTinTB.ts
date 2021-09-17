



interface TT{
    imei: number,
    sim: string,
    tinhTrang:string,    
    loaiTB: string,
    tenTB: string,
    diaChi: string,
    ngayKH : string,
    ketnoi: string,
    
    
}

const ThongTin : TT[] = [
    {
        imei: 4456456455675,
        sim: "0369756908" ,
        tinhTrang: 'Bình thường',
        loaiTB: 'Thiết bị cảnh báo dành cho ATM',
        tenTB: 'ATM - 123124234234',
        diaChi: 'Âu Cơ, P.8, Q.Tân Bình, TP.HCM',
        ngayKH: '20/09/2019 - 12:05:30',
        ketnoi: 'Pin dự phòng',
        
       
        
    }
];


export {TT , ThongTin}; 