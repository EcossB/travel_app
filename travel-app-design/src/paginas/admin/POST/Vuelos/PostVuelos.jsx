import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import useAuthToken from '../../../../hooks/useAuthToken';
import { useState } from 'react';
import { Loading } from '../../../../componentes/login/Loading';
import { useNavigate } from 'react-router-dom';
import usePaisId from '../../../../hooks/usePais';
import swal from 'sweetalert';

export const PostVuelos = () => {
  const [loading, setLoading] = useState(false);
  const token = useAuthToken();
  const navigate = useNavigate();
  const { paisId } = usePaisId();

  const validationSchema = Yup.object().shape({
        linkVuelo: Yup.string().required('Este campo es obligatorio'),
  });

  const initialValues = {
    linkVuelo: '',
    paisId: { pais_id: paisId }, 
  };

  const handleClickNext = () => {
    navigate('/admin-turisteo');
  }

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    setLoading(true);

    try {
      const response = await fetch('https://springgcp-405619.ue.r.appspot.com/vuelos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },

        body: JSON.stringify(values),
      });

      console.log('Cuerpo de la solicitud para agregar vuelos:', JSON.stringify(values));

      if (response.ok) {
        const responseData = await response.json();
        console.log('Datos enviados exitosamente:', responseData);
        swal({
          icon: 'success',
          title: 'Bien',
          text: '¡Vuelo agregado correctamente!',
        });

        resetForm();
      } else {
        swal({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo agregar el link',
        });
        console.log('Error al enviar los datos. Status: ', response.status);
      }
    } catch (error) {
      swal({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo agregar el link',
      });

      console.error('Error al enviar datos', error);
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
          <h2>Vuelo</h2>
          <div>
            <label htmlFor="nombre">Link:</label>
            <Field type="text" id="linkVuelo" name="linkVuelo" />
            <ErrorMessage name="linkVuelo" component="div" className="ErrorMessage"/>
          </div>
  
          <div className="buttonPost__container">
            <button type="submit">Enviar ✓</button>
            <button type="button" onClick={handleClickNext}>Finalizar</button>
          </div>
          {loading && <Loading />}
        </Form>
      </Formik>
    )
  }

  