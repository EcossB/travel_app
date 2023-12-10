
import { Formik, Form, Field } from 'formik';
import useAuthToken from '../../../hooks/useAuthToken';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
//import './delPaisesStyle.css';
import '../POST/postFormStyle.css';
import { useEffect } from "react";
import PropTypes from 'prop-types';

export const DelPaises = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle;
    return () => {
      document.title = 'Turisteo';
    };
  }, [pageTitle]);
  
  const navigate = useNavigate();

  const initialValues = {
    countryName: ''
  };

  const token = useAuthToken();
  
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    try {
      const response = await fetch(`https://springgcp-405619.ue.r.appspot.com/paises/pais/${values.countryName}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });

      if (!response.ok) {
        // Manejar el caso en el que no se encuentren detalles del país
        swal({
          icon: 'error',
          title: 'Error',
          text: 'No se encontraron detalles para el país',
        });
        setSubmitting(false);
        return;
      }

      const countryDetails = await response.json();
      const countryId = countryDetails.pais_id;
      console.log('id: ', countryId);

    // Ahora que tienes el ID, puedes hacer la solicitud DELETE
    const responseDelete = await fetch(`https://springgcp-405619.ue.r.appspot.com/paises/${countryId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });

      if (responseDelete.ok) {
        resetForm();

        swal({
          icon: 'success',
          title: 'Listo',
          text: '¡País eliminado con éxito!',
        });

      } else {
        swal({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo eliminar el país',
        });
        console.log('Error al eliminar el país. Status: ', responseDelete.status, 'detalles: ', await responseDelete.text());
      }
    } catch (error) {
      swal({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo eliminar el país',
      });
      console.error('Error al eliminar el país', error.ErrorMessage);
    }

    setSubmitting(false);
  };

  const handleClickNext = () => {
    navigate('/admin-turisteo');
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className='postd deleteCountry'>
        <h2>Eliminar país</h2>
        <div>
          <label htmlFor="nombre">País</label>
            <Field type="text" id="nombre" name="countryName" placeholder="Ej: Estados Unidos"/>
        </div>

        <div className="buttonPost__container">
            <button type="submit">Eliminar país</button>
            <button type="button" onClick={handleClickNext}>Finalizar</button>
        </div>
      </Form>
    </Formik>
  );
};

DelPaises.propTypes = {
  pageTitle: PropTypes.any,
};

