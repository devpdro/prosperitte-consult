'use client'

import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'

import { Button } from 'src/presentation/components'

import S from './loan-request.module.scss'

type LoanRequestProps = {
  nome: string
  email: string
  whatsapp: string
  cpf: string
  tipoSolicitacao: string
  termos: boolean
}

const LoanRequest = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoanRequestProps>({
    defaultValues: {
      nome: '',
      email: '',
      whatsapp: '',
      cpf: '',
    },
  })

  const onSubmit = () => {
    const phone = '5519993273002';
    const msg = encodeURIComponent(
      'Olá! Tenho interesse em simular um consórcio e gostaria de receber mais informações. Pode me ajudar a conquistar meu objetivo?'
    );
    window.open(`https://wa.me/${phone}?text=${msg}`);
    reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={S.form}>
        <fieldset>
          <legend className={S.title}>Simule o seu consórcio.
            O momento é agora!
          </legend>

          <p className={S.paragraphSubtitle}>
            Aproveite esse momento de menor competitividade e saia na frente. Garanta taxas mais atraentes, maior margem de negociação e aproveite a tendência por menores lances para contemplar.
          </p>

          <select
            defaultValue=""
            className={`${S['input-text']} ${errors.tipoSolicitacao ? S['input-text-error'] : ''}`}
            {...register('tipoSolicitacao', {
              required: 'Tipo de solicitação é obrigatório',
            })}
          >
            <option value="" disabled hidden>
              Que tipo de produto você busca?
            </option>
            <option className={S['option']} value="Imóvel">
              Imóvel
            </option>
            <option className={S['option']} value="Terreno">
              Terreno
            </option>
            <option className={S['option']} value="Terreno e Construção">
              Terreno e Construção
            </option>
            <option className={S['option']} value="Reforma">
              Reforma
            </option>
            <option className={S['option']} value="Quitação de Financiamento">
              Quitação de Financiamento
            </option>
            <option className={S['option']} value="Investimento">
              Investimento
            </option>
            <option className={S['option']} value="Carro Novo">
              Carro
            </option>
            <option className={S['option']} value="Caminhão">
              Caminhão
            </option>
            <option className={S['option']} value="Moto">
              Moto
            </option>
          </select>


          <input
            {...register('nome', {
              required: 'Nome é obrigatório',
              minLength: {
                value: 4,
                message: 'Nome deve ter no mínimo 4 caracteres',
              },
            })}
            className={`${S['input-text']} ${errors.nome ? S['input-text-error'] : ''}`}
            type="text"
            placeholder="Nome"
          />

          <input
            {...register('email', {
              required: 'E-mail é obrigatório',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'E-mail inválido',
              },
            })}
            className={`${S['input-text']} ${errors.email ? S['input-text-error'] : ''}`}
            type="text"
            placeholder="E-mail"
          />

          <InputMask
            {...register('whatsapp', {
              required: 'Whatsapp é obrigatório',
              pattern: {
                value: /^\(\d{2}\) \d{5}-\d{4}$/,
                message: 'Whatsapp inválido',
              },
            })}
            mask="(99) 99999-9999"
            maskChar=""
            className={`${S['input-text']} ${S['margin-btn']} ${errors.whatsapp ? S['input-text-error'] : ''}`}
            type="tel"
            inputMode="tel"
            placeholder="Telefone (com DDD)"
          />

          <Button typeStyle="btn1" width="100%" label={isSubmitting ? 'Simular agora' : 'Simular agora'} />
        </fieldset>
      </form>
    </div>
  )
}

export default LoanRequest
