// Form.js
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useAuthToken from '../../../hooks/useAuthToken';
import "./postFormStyle.css";
import usePaisId from '../../../hooks/usePais';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const validationSchema = Yup.object().shape({
  nombre: Yup.string().required('Este campo es obligatorio'),
  descripcion: Yup.string().required('Este campo es obligatorio'),
  continentes: Yup.string().required('Este campo es obligatorio'),
  bandera: Yup.string().required('Este campo es obligatorio'),
  imagen1: Yup.string().required('Este campo es obligatorio'),
  imagen2: Yup.string().required('Este campo es obligatorio'),
});

export const PostForm = () => {
  const { savePaisId } = usePaisId();
  const navigate = useNavigate();


  const initialValues = {
    nombre: '',
    descripcion: '',
    continentes: 'AMERICA',
    bandera: '',
    imagen1: '',
    imagen2: '',
  };

  const token = useAuthToken();
  
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    try {
      const response = await fetch('https://springgcp-405619.ue.r.appspot.com/paises', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(values),
      });

      console.log('Cuerpo de la solicitud para agregar país:', JSON.stringify(values));
    
      if (response.ok) {
        const responseData = await response.json();
        console.log('Datos enviados exitosamente:', responseData, 'id: ', responseData.id);
        localStorage.setItem('sharedId', responseData.id);

        resetForm(); 
        savePaisId(responseData.id);

        swal({
          icon: 'success',
          title: 'Listo',
          text: '¡País agregado con éxito!',
        });
        
      } else {
        swal({
          icon: 'error',
          title: 'Error',
          text: 'El país ya existe',
        });
        console.log('error al enviar los datos. Status: ', response.status)
      }

    } catch (error) {
      swal({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo agregar el país',
      });
      console.error('Error al enviar datos', error.ErrorMessage);
    }

    setSubmitting(false);

  };

  const handleClickNext = () => {
    navigate('/admin-turisteo/Postpaises/lugares');
    /*if (!initialValues.nombre || !initialValues.descripcion || !initialValues.imagen){
      swal({
        icon: 'error',
        title: 'Error',
        text: 'Datos incompletos',
      });

    } else {
      navigate('/admin-turisteo/Postpaises/lugares');
    }*/
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className='postd'>
        <h2>Agregar país</h2>
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
          <label htmlFor="continentes">Continente:</label>
          <Field as="select" id="continentes" name="continentes">
            <option value="AMERICA">América</option>
            <option value="EUROPA">Europa</option>
            <option value="AFRICA">África</option>
            <option value="OCEANIA">Oceanía</option>
            <option value="ASIA">Asia</option>
          </Field>
          <ErrorMessage name="continentes" component="div" className="ErrorMessage"/>
        </div>

        <div>
          <label htmlFor="bandera">Bandera:</label>
          <Field type="text" id="bandera" name="bandera" />
          <ErrorMessage name="bandera" component="div" className="ErrorMessage"/>
        </div>

        <div>
          <label htmlFor="imagen1">Imagen 1:</label>
          <Field type="text" id="imagen1" name="imagen1" />
          <ErrorMessage name="imagen1" component="div" className="ErrorMessage"/>
        </div>

        <div>
          <label htmlFor="imagen2">Imagen 2:</label>
          <Field type="text" id="imagen2" name="imagen2" />
          <ErrorMessage name="imagen2" component="div" className="ErrorMessage"/>
        </div>

        <div className="buttonPost__container">
            <button type="submit">Enviar ✓</button>
            <button type="button" onClick={handleClickNext}>Siguiente →</button>
        </div>
      </Form>
    </Formik>
  );
};

