var convertor= {
    convertir: function(medida,unidadMedi,unidadF,tipo){
        switch (tipo){
            case 'L':
                switch (unidadF){
                    case 'm':
                        switch(unidadMedi){
                            case 'km':
                                console.log(medida*1000);
                                break;
                            case 'cm':
                                console.log(medida*(1/100));
                                break;
                            case 'ft':
                                console.log(medida*(1/3.28));
                                break;
                            default:
                                console.log('El tipo de medida no existe');
                        }
                        break;
                    case 'km':
                    console.log(medida*(1/1000));
                        break;
                    case 'cm':
                    console.log(medida*100);
                        break;
                    case 'ft':
                    console.log(medida*3.28);
                        break;
                    default:
                        console.log('La unidad de salida no existe');        
                }
                break;
            case 'T':
                switch (unidadF){
                    case 'f':
                        switch (unidadMedi){
                            case 'k':
                                console.log((9*(medida-273.15)/5)+32);
                                break;
                            case 'c':
                                console.log((9*medida/5)+32);
                                break;
                            default:
                                console.log('El tipo de medida no existe');
                        }
                        break;
                    case 'c':
                        
                        switch (unidadMedi){
                            case 'k':
                                console.log(medida-273.15);
                                break;
                            case 'f':
                                console.log(5*(medida-32)/9);
                                break;
                            default:
                                console.log('El tipo de medida no existe');
                        }
                        break;
                    case 'k':
                        switch (unidadMedi){
                            case 'f':
                                console.log(((5*(medida-32))/9)+273.5);
                                break;
                            case 'c':
                                console.log(medida+273.15)
                                break;
                            default:
                                console.log('El tipo de medida no existe');
                        }
                        break;
                    default:
                        console.log('La unidad de salida no existe');        
                }
                break;
            default:
                console.log('El tipo de medida no existe');
        }
    }
}