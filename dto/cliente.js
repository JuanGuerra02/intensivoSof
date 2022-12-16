class cliente{

    constructor(nmcliente,documento,dsnombres,desapellidos,dsdireccion){
    this.nmcliente = nmcliente
    this.documento = documento
    this.dsnombres = dsnombres
    this.desapellidos = desapellidos
    this.dsdireccion = dsdireccion
    }


    setNmcliente(nmcliente){
        this.nmcliente = nmcliente
    }

    getNmcliente(){
        return this.nmcliente;
    }

    setDocumento(documento){
        this.documento = documento
    }

    getDocumento(){
        return documento
    }

    setDsnombres(dsnombres){
        this.dsnombres=dsnombres
    }

    getDsnombres(){
        return dsnombres
    }

    setDesapellidos(desapellidos){
        this.desapellidos =desapellidos
    }

    getDesapellidos(){
        return desapellidos
    }

    setDireccion(dsdireccion){
        this.dsdireccion =dsdireccion
    }

    getDireccion(){
        return dsdireccion
    }

}