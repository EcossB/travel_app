// PostLugares.js
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import useAuthToken from '../../../../hooks/useAuthToken';
import { useState } from 'react';
import { Loading } from '../../../../componentes/login/Loading';
import { useNavigate } from 'react-router-dom';
import usePaisId from '../../../../hooks/usePais';
import swal from 'sweetalert';

export const PostGastronomia = () => {
  const [loading, setLoading] = useState(false);
  const token = useAuthToken();
  const navigate = useNavigate();
  const { paisId } = usePaisId();
  const [count, setCount] = useState(1);

  const validationSchema = Yup.object().shape({
    gastronomia: Yup.array().of(
      Yup.object().shape({
        nombrePlato: Yup.string().required('Este campo es obligatorio'),
        linkImagen: Yup.string().required('Este campo es obligatorio'),
      })
    ),
  });

  const initialValues = {
    nombrePlato: '',
    linkImagen: '',
    paisId: { pais_id: paisId }, 
  };

  const handleClickNext = () => {
    setCount(count + 1);
    if (count >= 4) {
      navigate('/admin-turisteo/Postpaises/vuelos');
    }
  }

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    setLoading(true);

    try {
      const response = await fetch('https://springgcp-405619.ue.r.appspot.com/gastronomia', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },

        body: JSON.stringify(values),
      });

      console.log('Cuerpo de la solicitud para agregar comida:', JSON.stringify(values));

      if (response.ok) {
        const responseData = await response.json();
        console.log('Datos enviados exitosamente:', responseData);
        swal({
          icon: 'success',
          title: 'Bien',
          text: '¡Comida agregada correctamente!',
        });

        resetForm();
      } else {
        swal({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo agregar la comida',
        });
        console.log('Error al enviar los datos. Token: ', token,'status: ', response.status);
      }
    } catch (error) {
      swal({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo agregar la comida',
      });

      console.error('Error al enviar datos', error, 'Token: ', token);
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
        <Form className='postd'>
          <h2>{`Comida ${count}`}</h2>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <Field type="text" id="nombrePlato" name="nombrePlato" />
            <ErrorMessage name="nombrePlato" component="div" className="ErrorMessage"/>
          </div>
  
          <div>
            <label htmlFor="imagen">Imagen: </label>
            <Field type="text" id="linkImagen" name="linkImagen" />
            <ErrorMessage name="linkImagen" component="div" className="ErrorMessage"/>
          </div>

          <div className="buttonPost__container">
            <button type="submit">Enviar ✓</button>
            <button type="button" onClick={handleClickNext}>Siguiente →</button>
          </div>
          {loading && <Loading />}
        </Form>
      </Formik>
    )
  }

  