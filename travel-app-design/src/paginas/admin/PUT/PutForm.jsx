import { Formik, Form, Field } from 'formik';
import useAuthToken from '../../../hooks/useAuthToken';
import "./putFormStyle.css";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import usePaisId from '../../../hooks/usePais';

export const PutForm = () => {
  const { savePaisId } = usePaisId();
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

      const countryDetails = await response.json();
      const countryData = countryDetails;
      console.log('Country:', countryData);

      if (response.ok) {
        resetForm(); 

        swal({
          icon: 'success',
          title: 'Bien',
          text: 'El país existe. Puede continuar.',
        });

        savePaisId(countryData);
        console.log(countryData);

        
      } else {
        swal({
          icon: 'error',
          title: 'Error',
          text: 'País inexistente',
        });
      }

    } catch (error) {
      swal({
          icon: 'error',
          title: 'Error',
          text: 'País inexistente',
      });
    }

    setSubmitting(false);

  };

  const handleClickNext = () => {
    navigate('/admin-turisteo/Putpaises/pais');
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className='postd'>
        <h2>Actualizar país</h2>
        <div>
          <label htmlFor="countryName">País que desea actualizar</label>
          <Field type="text" id="countryName" name="countryName" />
        </div>
      
        <div className="buttonPost__container">
            <button type="submit">Comprobar</button>
            <button type="button" onClick={handleClickNext}>Siguiente →</button>
        </div>
      </Form>
    </Formik>
  );
};

