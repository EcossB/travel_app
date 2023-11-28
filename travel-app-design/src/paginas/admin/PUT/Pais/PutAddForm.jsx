import usePaisId from '../../../../hooks/usePais';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useAuthToken from '../../../../hooks/useAuthToken';
import { useState } from 'react';
import { Loading } from '../../../../componentes/login/Loading';

export const PutAddForm = () => {
  const { paisId } = usePaisId();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    id: paisId.pais_id,
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
    setLoading(true)

    try {
      
      const response = await fetch('https://springgcp-405619.ue.r.appspot.com/paises', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(values),
      });

      console.log('Cuerpo de la solicitud para actualizar país:', JSON.stringify(values));
    
      if (response.ok) {
        const responseData = await response.json();
        console.log('Datos enviados exitosamente:', responseData, 'id: ', responseData.id);

        resetForm(); 

        swal({
          icon: 'success',
          title: 'Listo',
          text: '¡País actualizado con éxito!',
        });
        
      } else {
        swal({
          icon: 'error',
          title: 'Error',
          text: 'No se puedo actualizar el país',
        });
        console.log('error al enviar los datos. Status: ', response.status)
      }

    } catch (error) {
      swal({
        icon: 'error',
        title: 'Error',
        text: 'No se puedo actualizar el país',
      });
      console.error('Error al enviar datos', error.ErrorMessage);
    }

    setSubmitting(false);
    setLoading(false)

  };

  const handleClickNext = () => {
    navigate('/admin-turisteo/Putpaises/lugares');
  }

  return (
    <div>
        <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className='postd'>
        <h2>Actualizar país</h2>
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
        <button type="button" onClick={handleClickNext}>Skip</button>

        <div className="buttonPost__container">
            <button type="submit">Actualizar ✓</button>
            <button type="button" onClick={handleClickNext}>Siguiente →</button>
        </div>
        {loading && <Loading />}
      </Form>
    </Formik>
    </div>
  )
}
