import { Database } from '@/@types/supabase'

export type IResidence = Database['public']['Tables']['residences']['Row']
export type IWishe = Database['public']['Tables']['wishes']['Row']
export type IResidenceKindEnum =
  Database['public']['Tables']['residences']['Row']['kind']
export type IResidenceStateEnum =
  Database['public']['Tables']['residences']['Row']['state']
export type ISavedResidences =
  Database['public']['Tables']['saved_residences']['Row']
export type ILovedResidences =
  Database['public']['Tables']['loved_residences']['Row']
export type IUser = Database['public']['Tables']['users']['Row']
export type INotification = Database['public']['Tables']['notifications']['Row']
export type IResidenceNotification =
  Database['public']['Tables']['residence_notifications']['Row']

export type IResidenceFilterEnum = IResidenceKindEnum | 'all'

export interface ICachedResidence {
  residence: IResidence
  user?: IUser
}
