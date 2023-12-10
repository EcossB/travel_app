import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import useAuthToken from '../../../../hooks/useAuthToken';
import { useState, useEffect } from 'react';
import { Loading } from '../../../../componentes/login/Loading';
import { useNavigate } from 'react-router-dom';
import usePaisId from '../../../../hooks/usePais';
import swal from 'sweetalert';
import PropTypes from 'prop-types';

export const PostLugares = ({ pageTitle }) => {
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

  const validationSchema = Yup.object().shape({
    lugaresFamosos: Yup.array().of(
      Yup.object().shape({
        nombre: Yup.string().required('Este campo es obligatorio'),
        descripcion: Yup.string().required('Este campo es obligatorio'),
        imagen: Yup.string().required('Este campo es obligatorio'),
      })
    ),
  });

  const initialValues = {
    nombre: '',
    descripcion: '',
    imagen: '',
    paisId: { pais_id: paisId }, 
  };

  const handleClickNext = () => {
    setCount(count + 1);
    if (count > 4) {
      navigate('/admin-turisteo/Postpaises/gastronomia');
    }
  }

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    setLoading(true);

    try {
      const response = await fetch('https://springgcp-405619.ue.r.appspot.com/lugaresfamosos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },

        body: JSON.stringify(values),
      });

      console.log('Cuerpo de la solicitud para agregar lugares:', JSON.stringify(values));

      if (response.ok) {
        const responseData = await response.json();
        console.log('Datos enviados exitosamente:', responseData);
        swal({
          icon: 'success',
          title: 'Bien',
          text: '¡Lugar agregado correctamente!',
        });

        resetForm();
      } else {
        swal({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo agregar el lugar',
        });
        console.log('Error al enviar los datos. Token: ', token,'status: ', response.status);
      }
    } catch (error) {
      swal({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo agregar el lugar',
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
  
          <div className="buttonPost__container">
            <button type="submit">Enviar ✓</button>
            <button type="button" onClick={handleClickNext}>Siguiente →</button>
          </div>
          {loading && <Loading />}
        </Form>
      </Formik>
    )
  }

PostLugares.propTypes = {
    pageTitle: PropTypes.any,
};
