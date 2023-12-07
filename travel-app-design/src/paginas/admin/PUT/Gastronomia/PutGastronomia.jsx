import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import useAuthToken from '../../../../hooks/useAuthToken';
import { useState } from 'react';
import { Loading } from '../../../../componentes/login/Loading';
import { useNavigate } from 'react-router-dom';
import usePaisId from '../../../../hooks/usePais';
import swal from 'sweetalert';
import '../../POST/postFormStyle.css';

export const PutGastronomia = () => {
    
  const [loading, setLoading] = useState(false);
  const token = useAuthToken();
  const navigate = useNavigate();
  const { paisId } = usePaisId();
  const [count, setCount] = useState(1);
  const [countId, setCountId] = useState(0);

  
  const validationSchema = Yup.object().shape({
    lugaresFamosos: Yup.array().of(
      Yup.object().shape({
        nombrePlato: Yup.string().required('Este campo es obligatorio'),
        linkImagen: Yup.string().required('Este campo es obligatorio'),
      })
    ),
  });

  const countryId = paisId.pais_id;

  const initialValues = {
    id: paisId.gastronomia[countId] ? paisId.gastronomia[countId].id : 0,
    nombrePlato: '',
    linkImagen: '',
    paisId: { pais_id: countryId }, 
  };

  const handleClickNext = (formikProps) => {
    setCount(count + 1);
    setCountId(countId + 1);

    if (count > 3) {
      navigate('/admin-turisteo/Putpaises/vuelos');
    }

    const nextId = paisId.gastronomia[countId + 1] ? paisId.gastronomia[countId + 1].id : 0;
    formikProps.setFieldValue('id', nextId);
  }

  const handleClickSkip = () => {
    navigate('/admin-turisteo/Putpaises/vuelos');
    return;
  }
  
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    setLoading(true);

    try {
      const response = await fetch('https://springgcp-405619.ue.r.appspot.com/gastronomia', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },

        body: JSON.stringify(values),
      });

      
      console.log('Cuerpo de la solicitud para actualizar comida:', JSON.stringify(values));
      console.log('Gastronomía ID:' , values.id, 'pais ID:', values.paisId);

      if (response.ok) {
        const responseData = await response.json();
        console.log('Datos enviados exitosamente:', responseData);
        swal({
          icon: 'success',
          title: 'Bien',
          text: '¡Comida actualizada correctamente!',
        });

        resetForm();
        
      } else {
        swal({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo actualizar la comida',
        });
        console.log('Error al enviar los datos. status: ', response.status);
      }
    } catch (error) {
      swal({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo actualizar la comida',
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
          <h2>{`Comida ${count}`}</h2>
          <div>
            <label htmlFor="nombrePlato">Nombre:</label>
            <Field type="text" id="nombrePlato" name="nombrePlato" />
            <ErrorMessage name="nombrePlato" component="div" className="ErrorMessage"/>
          </div>
  
          <div>
            <label htmlFor="linkImagen">Imagen: </label>
            <Field type="text" id="linkImagen" name="linkImagen" />
            <ErrorMessage name="linkImagen" component="div" className="ErrorMessage"/>
          </div>
          <button type="button" onClick={handleClickSkip}>Skip</button>

          <div className="buttonPost__container">
            <button type="submit">Actualizar ✓</button>
            <button type="button" onClick={() => handleClickNext(formikProps)}>Siguiente →</button>
          </div>

          {loading && <Loading />}
        </Form>
        )}
      </Formik>
    )
  }

  