import React, { useEffect } from 'react'
import axios from 'axios';
import { saveAs } from 'file-saver';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { clearActiveRecord, recordStartDelete, recordStartLoading } from '../../actions/records';
import { Navbar } from '../ui/Navbar'
import { RecordRow } from './RecordRow';
import Notice from "@ouduidui/notice";
import "@ouduidui/notice/style.css";

let recordID = '';

export const DashboardScreen = () => {
    
    const { records, activeRecord } = useSelector( state => state.aegis );
    // console.log(records.length)
    const dispatch = useDispatch();

    const notice = new Notice();

    
    if(activeRecord !== null) {
        recordID = activeRecord.id
    }
    
    const handleDelete = () => {
        
        dispatch( recordStartDelete() );              
        
    }

    const handleDisactivate = () => {

        const checkedRad = document.querySelector('input[name=record]:checked');
        checkedRad.checked = false;
        dispatch( clearActiveRecord() );

    }

    useEffect(() => {
        
        dispatch( recordStartLoading() );

    }, [ dispatch ])
    
    const createAndDownloadPdf = () => {
        
        notice.showLoading({
            type: 'dots',
            title: 'Preparando Documentos',
            color: '#333',
            backgroundColor: 'rgba(255,255,255,.6)',
            fontSize: 14
        });

        axios.post('/create-pdf', activeRecord)
        .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
        .then((res) => {
        
          const pdfBlob = new Blob([res.data], { type: 'application/pdf' });    
          saveAs(pdfBlob, 'newPdf.pdf');

          notice.hideLoading();
          
        })
      //   axios.post('/create-pdf2', this.state)
      //   .then(() => axios.get('fetch-pdf2', { responseType: 'blob' }))
      //   .then((res) => {
        
      //     const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
  
      //     saveAs(pdfBlob, 'newPdf2.pdf');
      //     this.setState({ loading : false });
      //     // console.log(this.state.loading);
      //   })  
      
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-6">
                        <h3 className="text-light">Nomina</h3>
                    </div>
                    <div className="col-md-6 aee_buttons">
                        {
                            activeRecord == null 
                            ?
                            <Link to='/crearPostulante'>
                                <button className={`btn btn-light }`}>
                                Agregar 
                                </button>
                            </Link>
                            :
                            <Link to={`/crearPostulante/:${ recordID }`}>
                                <button className={`btn btn-light }`}>
                                Editar 
                                </button>
                            </Link> 
                        }                        
                        {
                            activeRecord != null &&
                            <button className="btn btn-light" onClick={ handleDelete }>
                                Eliminar
                            </button>
                        }
                        {
                            activeRecord != null &&
                            <button className="btn btn-light" onClick={ createAndDownloadPdf }>
                                Descargar
                            </button>
                        }
                        {
                            activeRecord != null &&
                            <button className="btn btn-light" onClick={ handleDisactivate }>
                                Limpiar
                            </button>
                        }
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col-md-3 text-light">
                        <p>ID</p>
                    </div>
                    <div className="col-md-3 text-light">
                        <p>Postulante</p>
                    </div>                    
                    <div className="col-md-2 text-light">
                        <p>RUT</p>
                    </div>
                    <div className="col-md-3 text-light">
                        <p>Correo Electronico</p>
                    </div>
                    <div className="col-md-1"></div>            
                </div>
                {                    
                    records.map(record => {
                       const { id, pNombre, pApellidopaterno, pRut, pEmail} = record;
                       return <RecordRow 
                                    key={ record.id }
                                    pid={ id } 
                                    nombre={ pNombre }
                                    apellido={ pApellidopaterno }
                                    rut={ pRut }
                                    correo={ pEmail }                                    
                              />
                    })                    
                }              
            </div>
        </div>
    )
}