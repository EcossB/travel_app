import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import useAuthToken from '../../../../hooks/useAuthToken';
import { useState } from 'react';
import { Loading } from '../../../../componentes/login/Loading';
import { useNavigate } from 'react-router-dom';
import usePaisId from '../../../../hooks/usePais';
import swal from 'sweetalert';
import '../../POST/postFormStyle.css';

export const PutVuelos = () => {
    
  const [loading, setLoading] = useState(false);
  const token = useAuthToken();
  const navigate = useNavigate();
  const { paisId } = usePaisId();

  const validationSchema = Yup.object().shape({
    linkVuelo: Yup.string().required('Este campo es obligatorio'),
  });

  const countryId = paisId.pais_id;

  const initialValues = {
    id: paisId.vuelos[0].id,
    linkVuelo: '',
    paisId: { pais_id: countryId }, 
  };

  const handleClickNext = () => {
    navigate('/admin-turisteo');
  }
  
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    setLoading(true);

    try {
      const response = await fetch('https://springgcp-405619.ue.r.appspot.com/vuelos', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },

        body: JSON.stringify(values),
      });

      
      console.log('Cuerpo de la solicitud para actualizar vuelos:', JSON.stringify(values));
      console.log('Vuelo ID:' , values.id, 'pais ID:', values.paisId);

      if (response.ok) {
        const responseData = await response.json();
        console.log('Datos enviados exitosamente:', responseData);
        swal({
          icon: 'success',
          title: 'Bien',
          text: '¡Link actualizado correctamente!',
        });

        resetForm();
        
      } else {
        swal({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo actualizar el link',
        });
        console.log('Error al enviar los datos. status: ', response.status);
      }
    } catch (error) {
      swal({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo actualizar el link',
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
        <Form className='postd'>
          <h2>Vuelos</h2>
          <div>
            <label htmlFor="linkVuelo">Link:</label>
            <Field type="text" id="linkVuelo" name="linkVuelo" />
            <ErrorMessage name="linkVuelo" component="div" className="ErrorMessage"/>
          </div>
  
          <div className="buttonPost__container">
            <button type="submit">Actualizar ✓</button>
            <button type="button" onClick={handleClickNext}>Finalizar</button>
          </div>

          {loading && <Loading />}
        </Form>
      </Formik>
    )
  }

  