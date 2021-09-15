
interface status{
    nhiet:string,
    rung:string,
    cuatrenATM:string,
    cuaketATM:string,
    cuangoaiATM:string,
    duPhong:string,
    dichChuyen:string,
    roDien:string,
    khoi:string,
    pinDuPhong:string,
    dienAp:string,
    baoHieu:string,
}
const Sensor : status[] = [
    {
        nhiet:'Cao',
        rung:'Binh thường' ,
        cuatrenATM:'Bật',
        cuaketATM:'Bật',
        cuangoaiATM:'Bật',
        duPhong:'Tắt',
        dichChuyen:'Tắt',
        roDien:'Tắt',
        khoi:'Bật',
        pinDuPhong:'Bật',
        dienAp:'09-265+5% Vac/50/60hz',
        baoHieu:'Còi hú',
    }
];

export {Sensor , status}; 

