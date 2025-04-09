import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
const ContactForm = styled.div`
    margin-top:30px;
    display:flex;
    flex-wrap: wrap;
`;

const FormCollabel = styled.h3`
    color:var(--main-color);
    font-size:20px;
    text-transform: uppercase;
    flex:0 0 100%;
    padding:10px;
`;
const CheckboxCol = styled.div`
    display:flex;
    flex-wrap: wrap;
    gap:20px;
`;



// check
const CheckboxContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 10px;

  input[type='checkbox']:checked + label {
    color: var(--blue-color);

    &:before {
      background: var(--main-color);
      border-color: var(--main-color);
    }

    &:after {
      content: "";
      width: 8px;
      height: 15px;
      border: solid var(--white);
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
      position: absolute;
      left: 8px;
      top: 0;
    }
  }
`;

const CheckboxInput = styled.input.attrs({
  type: 'checkbox',
})`
  opacity: 0;
  position: absolute;
  width: auto;
`;

const CheckboxLabel = styled.label`
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-weight: 500;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    height: 25px;
    width: 25px;
    border: 2px solid var(--black);
    background: var(--white);
    top: 50%;
    transform: translateY(-50%);
  }
`;


// check

const ErrorMessage = styled.p`
  position: absolute;
  right: 5px;
  bottom: 4px;
  font-size: 14px;
  color: #f00;
`;
const FormColHalf = styled.div`
  position: relative;
  flex:0 0 50%;
  padding:10px;
    @media (max-width:800px) {
        flex:0 0 100%;
    }
`;
const FormColFull = styled.div`
  position: relative;
  flex:0 0 100%;
  padding:10px;
`;

const InputLabel = styled.label`    
    opacity: 0;
    position: absolute;
    font-size: 1px;
`;
const TextInput = styled.input`
  padding: 15px;
  font-size: 16px;
  border: 2px solid #000;
  border-radius: 4px;
  width: 100%;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  &.required {
    border-color: #f00;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  width: 100%;
  height:200px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  &.required {
    border-color: #f00;
  }
`;

export default function ContactPageForm() {
  const { register, getValues, handleSubmit, handleError, formState: { errors } } = useForm({
    mode: "onChange"
  });

  const handleKeyPress = (event) => {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', ' '];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  };

  const router = useRouter();
  const [ButtonShow, setButtonShow] = useState(false);

  const onSubmit = async (data) => {
    const location = getValues('location');
    setButtonShow(true);
    const updatedFormData = {
      ...data,
      location,
    };
    try {
      const response = await fetch('https://crm-api.amrsoftec.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      localStorage.removeItem("formData");
      router.push('/thank-you');
      setButtonShow(false);
    } catch (error) {
      console.error('Error:', error);
      alert('There was a problem sending your message.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, handleError)}>
        <ContactForm>
            <FormCollabel>I Need</FormCollabel>
            <FormColFull>
                <CheckboxCol>

                    <CheckboxContainer>
                        <CheckboxInput id='1' {...register("subject", { required: "Please Select One." })} value="Website Design & Development" />
                        <CheckboxLabel htmlFor="1">
                            Website Design & Development
                        </CheckboxLabel>
                    </CheckboxContainer>

                    <CheckboxContainer>
                        <CheckboxInput id='2' {...register("subject", { required: "Please Select One." })} value="E-commerce Website Development" />
                        <CheckboxLabel htmlFor="2">E-commerce Website Development</CheckboxLabel>
                    </CheckboxContainer>

                    <CheckboxContainer>
                        <CheckboxInput id='3' {...register("subject", { required: "Please Select One." })} value="Digital Marketing (SEO, SMO, PPC etc)" />
                        <CheckboxLabel htmlFor="3">Digital Marketing (SEO, SMO, PPC)</CheckboxLabel>
                    </CheckboxContainer>

                    <CheckboxContainer>
                        <CheckboxInput id='4' {...register("subject", { required: "Please Select One." })} value="Other" />
                        <CheckboxLabel htmlFor="4">Other</CheckboxLabel>
                    </CheckboxContainer>

                    {errors?.subject && (
                    <ErrorMessage>{errors.subject.message}</ErrorMessage>
                    )}
                </CheckboxCol>
            </FormColFull>
            <FormColHalf>
                <InputLabel htmlFor="name">Name</InputLabel>
                <TextInput placeholder="My Name is" {...register("name", { required: "Name is required" })} id="name" className={errors?.name ? "required" : ""} />
                {errors?.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
            </FormColHalf>

            <FormColHalf>
                <InputLabel htmlFor="email">Email</InputLabel>
                <TextInput placeholder='Here is my email' {...register("email", {
                required: "Email is required",
                pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address"
                }
                })} id="email" className={errors?.email ? "required" : ""} />
                {errors?.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
            </FormColHalf>

            <FormColHalf>
                <InputLabel htmlFor="phone">Phone Number</InputLabel>
                <TextInput placeholder='My phone number' {...register("phone")} onKeyPress={handleKeyPress} id="phone" className={errors?.phone ? "required" : ""} />
                {errors?.phone && (
                <ErrorMessage>{errors.phone.message}</ErrorMessage>
                )}
            </FormColHalf>
            
            <FormCollabel>and I Want ...</FormCollabel>
            <FormColFull>
                <InputLabel htmlFor="message">Message</InputLabel>
                <TextArea placeholder="and I want..." {...register("message", { required: "Message is required" })} id="message" className={errors?.message ? "required" : ""} />
                {errors?.message && (
                <ErrorMessage>{errors.message.message}</ErrorMessage>
                )}
            </FormColFull>

            <FormColFull>
                {ButtonShow ? (
                <button type="button" disabled className="form-btn w-full text-[20px]">
                    Sending Request...
                </button>
                ) : (
                <button type="submit" className="form-btn w-full text-[20px]">Request a Call Back</button>
                )}
            </FormColFull>
        </ContactForm>
    </form>
  );
}
