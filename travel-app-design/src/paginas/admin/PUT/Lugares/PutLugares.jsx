import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import useAuthToken from '../../../../hooks/useAuthToken';
import { useState, useEffect } from 'react';
import { Loading } from '../../../../componentes/login/Loading';
import { useNavigate } from 'react-router-dom';
import usePaisId from '../../../../hooks/usePais';
import swal from 'sweetalert';
import '../../POST/postFormStyle.css';
import PropTypes from 'prop-types';

export const PutLugares = ({ pageTitle }) => {

  useEffect(() => {
    document.title = pageTitle;
    return () => {
      document.title = 'Turisteo';
    };
  }, [pageTitle]);

    
  const [loading, setLoading] = useState(false);
  const token = useAuthToken();
  const navigate = useNavigate();
  const { paisId } = usePaisId();
  const [count, setCount] = useState(1);
  const [countId, setCountId] = useState(0);
  
  const validationSchema = Yup.object().shape({
    lugaresFamosos: Yup.array().of(
      Yup.object().shape({
        nombre: Yup.string().required('Este campo es obligatorio'),
        descripcion: Yup.string().required('Este campo es obligatorio'),
        imagen: Yup.string().required('Este campo es obligatorio'),
      })
    ),
  });

  const countryId = paisId.pais_id;

  const initialValues = {
    id: paisId.lugaresFamosos[countId] ? paisId.lugaresFamosos[countId].id : 0,
    nombre: '',
    descripcion: '',
    imagen: '',
    paisId: { pais_id: countryId }, 
  };

  const handleClickNext = (formikProps) => {
    setCount(count + 1);
    setCountId(countId + 1);

    if (count > 4) {
      navigate('/admin-turisteo/Putpaises/gastronomia');
      return;
    }

    const nextId = paisId.lugaresFamosos[countId + 1] ? paisId.lugaresFamosos[countId + 1].id : 0;
    formikProps.setFieldValue('id', nextId);
    console.log('next: ', nextId)
  }

  const handleClickSkip = () => {
    navigate('/admin-turisteo/Putpaises/gastronomia');
  }
  
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    setLoading(true);

    try {
      const response = await fetch('https://springgcp-405619.ue.r.appspot.com/lugaresfamosos', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },

        body: JSON.stringify(values),
      });

      if (values.id === undefined){
        console.log('umm')
      }

      console.log('Cuerpo de la solicitud para actualizar lugares:', JSON.stringify(values));
      console.log('lugares ID:' , values.id, 'pais ID:', values.paisId);
      console.log(paisId.lugaresFamosos);

      if (response.ok) {
        const responseData = await response.json();
        console.log('Datos enviados exitosamente:', responseData);
        swal({
          icon: 'success',
          title: 'Bien',
          text: '¡Lugar actualizado correctamente!',
        });

        resetForm();
        
      } else {
        swal({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo actualizar el lugar',
        });
        console.log('Error al enviar los datos. status: ', response.status);
      }
    } catch (error) {
      swal({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo actualizar el lugar',
      });

      console.error('Error al actualizar datos', error);

    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
        <Form className='postd'>
          <h2>{`Lugar famoso ${count}`}</h2>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <Field type="text" id="nombre" name="nombre" />
            <ErrorMessage name="nombre" component="div" className="ErrorMessage"/>
          </div>
  
          <div>
            <label htmlFor="descripcion">Descripción:</label>
            <Field type="text" id="descripcion" name="descripcion" />
            <ErrorMessage name="descripcion" component="div" className="ErrorMessage"/>
          </div>
  
          <div>
            <label htmlFor="imagen">Imagen: </label>
            <Field type="text" id="imagen" name="imagen" />
            <ErrorMessage name="imagen" component="div" className="ErrorMessage"/>
          </div>
          <button type="button" onClick={handleClickSkip}>Skip</button>

          
          <div className="buttonPost__container">
            <button type="submit">Actualizar ✓</button>
            <button type="button"  onClick={() => handleClickNext(formikProps)}>Siguiente →</button>
          </div>

          {loading && <Loading />}
        </Form>
        )}
      </Formik>
    )
  }

PutLugares.propTypes = {
    pageTitle: PropTypes.any,
};
