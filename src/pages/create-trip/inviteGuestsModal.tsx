import { AtSign, Plus, X } from "lucide-react"
import { FormEvent } from "react"
import { Button } from "../../components/global/button"

interface inviteGuestsModalProps {
    closeGuestsModal: () => void,
    emailToInvite: string[],
    removeEmailFromInvites: (email: string) => void,
    addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
}

export function InviteGuestsModal({ addNewEmailToInvite,
    closeGuestsModal,
    removeEmailFromInvites,
    emailToInvite }: inviteGuestsModalProps) {

    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-950 space-y-5'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Selecionar Convidados</h2>
                        <button type='button' onClick={closeGuestsModal}>
                            <X className='size-5 text-zinc-400'></X>
                        </button>
                    </div>
                    <p className='text-sm text-zinc-400'>
                        Os convidados iraoo receber e-mails para confirmar a participacao na viagem.
                    </p>
                </div>

                <div className='flex flex-wrap gap-2'>
                    {emailToInvite.map(email => {
                        return (
                            <div key={email} className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'>
                                <span className='text-zinc-300'>{email}</span>
                                <button type='button' onClick={() => removeEmailFromInvites(email)}>
                                    <X className='size-4 text-zinc-400'></X>
                                </button>
                            </div>
                        )
                    })}
                </div>

                <div className='w-full h-px bg-zinc-800'></div>

                <form onSubmit={addNewEmailToInvite} className='p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                    <AtSign className='size-5 text-zinc-400'></AtSign>
                    <input type="email"
                        name='email'
                        placeholder="Digite o e-mail do convidado"
                        className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />

                    <Button variant='primary'>
                        Convidar
                        <Plus className='size-5' />
                    </Button>
                </form>

            </div>
        </div>
    )
}