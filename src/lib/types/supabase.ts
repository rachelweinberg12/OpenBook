// Generated via https://supabase.com/docs/guides/api/generating-types#generating-types-using-supabase-cli
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      documents: {
        Row: {
          document_id: number
          url: string | null
          title: string | null
          publication_date: string | null
          modified_date: string | null
          author: string | null
          publisher: string | null
          affected_donors: string | null
          affected_donees: string | null
          affected_influencers: string | null
          document_scope:
            | "Launch"
            | "Merger"
            | "Shutdown"
            | "Pre-launch planning"
            | "Broad donor strategy"
            | "Single donation documentation"
            | "Donee periodic update"
            | "Donee donation case"
            | "Evaluator review of donee"
            | "Evaluator update on donee"
            | "Evaluator consolidated recommendation list"
            | "Periodic donation list documentation"
            | "Reasoning supplement"
            | "Third-party coverage of donor strategy"
            | "Third-party case for donation"
            | "Third-party case against donation"
            | "Donation suggestion list"
            | "Unsolicited third-party suggestions for donor"
            | "Review of current state of cause area"
            | "Status change"
            | "Miscellaneous commentary"
            | "Donee AMA"
            | "Evaluator retrospective"
            | "Evaluator quantification approach"
            | "Job advertisement"
            | "Request for proposals"
            | "Request for reviews of donee"
            | "Request for critiques of donor strategy"
            | "Partnership"
            | null
          cause_area: string | null
          notes: string | null
        }
        Insert: {
          document_id?: number
          url?: string | null
          title?: string | null
          publication_date?: string | null
          modified_date?: string | null
          author?: string | null
          publisher?: string | null
          affected_donors?: string | null
          affected_donees?: string | null
          affected_influencers?: string | null
          document_scope?:
            | "Launch"
            | "Merger"
            | "Shutdown"
            | "Pre-launch planning"
            | "Broad donor strategy"
            | "Single donation documentation"
            | "Donee periodic update"
            | "Donee donation case"
            | "Evaluator review of donee"
            | "Evaluator update on donee"
            | "Evaluator consolidated recommendation list"
            | "Periodic donation list documentation"
            | "Reasoning supplement"
            | "Third-party coverage of donor strategy"
            | "Third-party case for donation"
            | "Third-party case against donation"
            | "Donation suggestion list"
            | "Unsolicited third-party suggestions for donor"
            | "Review of current state of cause area"
            | "Status change"
            | "Miscellaneous commentary"
            | "Donee AMA"
            | "Evaluator retrospective"
            | "Evaluator quantification approach"
            | "Job advertisement"
            | "Request for proposals"
            | "Request for reviews of donee"
            | "Request for critiques of donor strategy"
            | "Partnership"
            | null
          cause_area?: string | null
          notes?: string | null
        }
        Update: {
          document_id?: number
          url?: string | null
          title?: string | null
          publication_date?: string | null
          modified_date?: string | null
          author?: string | null
          publisher?: string | null
          affected_donors?: string | null
          affected_donees?: string | null
          affected_influencers?: string | null
          document_scope?:
            | "Launch"
            | "Merger"
            | "Shutdown"
            | "Pre-launch planning"
            | "Broad donor strategy"
            | "Single donation documentation"
            | "Donee periodic update"
            | "Donee donation case"
            | "Evaluator review of donee"
            | "Evaluator update on donee"
            | "Evaluator consolidated recommendation list"
            | "Periodic donation list documentation"
            | "Reasoning supplement"
            | "Third-party coverage of donor strategy"
            | "Third-party case for donation"
            | "Third-party case against donation"
            | "Donation suggestion list"
            | "Unsolicited third-party suggestions for donor"
            | "Review of current state of cause area"
            | "Status change"
            | "Miscellaneous commentary"
            | "Donee AMA"
            | "Evaluator retrospective"
            | "Evaluator quantification approach"
            | "Job advertisement"
            | "Request for proposals"
            | "Request for reviews of donee"
            | "Request for critiques of donor strategy"
            | "Partnership"
            | null
          cause_area?: string | null
          notes?: string | null
        }
      }
      "donations-all": {
        Row: {
          donation_id: string | null
          donor: string | null
          donee: string | null
          amount: string | null
          amount_original_currency: string | null
          original_currency: string | null
          currency_conversion_date: string | null
          currency_conversion_basis: string | null
          fraction: string | null
          donation_date: string | null
          donation_date_precision: string | null
          donation_date_basis: string | null
          cause_area: string | null
          url: string | null
          donor_cause_area_url: string | null
          notes: string | null
          donation_process: string | null
          intended_use_of_funds_category: string | null
          intended_use_of_funds: string | null
          intended_funding_timeframe_in_months: string | null
          donor_donee_reason: string | null
          donor_amount_reason: string | null
          donor_timing_reason: string | null
          donor_next_donation_thoughts: string | null
          donor_retrospective: string | null
          payment_modality: string | null
          match_eligible: string | null
          goal_amount: string | null
          influencer: string | null
          employer_match: string | null
          matching_employer: string | null
          special_donation_reason: string | null
          donation_earmark: string | null
          affected_countries: string | null
          affected_states: string | null
          affected_cities: string | null
          affected_regions: string | null
          donation_announcement_date: string | null
          donation_announcement_date_precision: string | null
          donation_announcement_url: string | null
          predictions: string | null
          is_contractwork: string | null
        }
        Insert: {
          donation_id?: string | null
          donor?: string | null
          donee?: string | null
          amount?: string | null
          amount_original_currency?: string | null
          original_currency?: string | null
          currency_conversion_date?: string | null
          currency_conversion_basis?: string | null
          fraction?: string | null
          donation_date?: string | null
          donation_date_precision?: string | null
          donation_date_basis?: string | null
          cause_area?: string | null
          url?: string | null
          donor_cause_area_url?: string | null
          notes?: string | null
          donation_process?: string | null
          intended_use_of_funds_category?: string | null
          intended_use_of_funds?: string | null
          intended_funding_timeframe_in_months?: string | null
          donor_donee_reason?: string | null
          donor_amount_reason?: string | null
          donor_timing_reason?: string | null
          donor_next_donation_thoughts?: string | null
          donor_retrospective?: string | null
          payment_modality?: string | null
          match_eligible?: string | null
          goal_amount?: string | null
          influencer?: string | null
          employer_match?: string | null
          matching_employer?: string | null
          special_donation_reason?: string | null
          donation_earmark?: string | null
          affected_countries?: string | null
          affected_states?: string | null
          affected_cities?: string | null
          affected_regions?: string | null
          donation_announcement_date?: string | null
          donation_announcement_date_precision?: string | null
          donation_announcement_url?: string | null
          predictions?: string | null
          is_contractwork?: string | null
        }
        Update: {
          donation_id?: string | null
          donor?: string | null
          donee?: string | null
          amount?: string | null
          amount_original_currency?: string | null
          original_currency?: string | null
          currency_conversion_date?: string | null
          currency_conversion_basis?: string | null
          fraction?: string | null
          donation_date?: string | null
          donation_date_precision?: string | null
          donation_date_basis?: string | null
          cause_area?: string | null
          url?: string | null
          donor_cause_area_url?: string | null
          notes?: string | null
          donation_process?: string | null
          intended_use_of_funds_category?: string | null
          intended_use_of_funds?: string | null
          intended_funding_timeframe_in_months?: string | null
          donor_donee_reason?: string | null
          donor_amount_reason?: string | null
          donor_timing_reason?: string | null
          donor_next_donation_thoughts?: string | null
          donor_retrospective?: string | null
          payment_modality?: string | null
          match_eligible?: string | null
          goal_amount?: string | null
          influencer?: string | null
          employer_match?: string | null
          matching_employer?: string | null
          special_donation_reason?: string | null
          donation_earmark?: string | null
          affected_countries?: string | null
          affected_states?: string | null
          affected_cities?: string | null
          affected_regions?: string | null
          donation_announcement_date?: string | null
          donation_announcement_date_precision?: string | null
          donation_announcement_url?: string | null
          predictions?: string | null
          is_contractwork?: string | null
        }
      }
      donations20: {
        Row: {
          donation_id: number
          donor: string | null
          donee: string | null
          amount: number | null
          amount_original_currency: string | null
          original_currency: string | null
          currency_conversion_date: string | null
          currency_conversion_basis: string | null
          fraction: string | null
          donation_date: string | null
          donation_date_precision: string | null
          donation_date_basis: string | null
          cause_area: string | null
          url: string | null
          donor_cause_area_url: string | null
          notes: string | null
          donation_process: string | null
          intended_use_of_funds_category: string | null
          intended_use_of_funds: string | null
          intended_funding_timeframe_in_months: string | null
          donor_donee_reason: string | null
          donor_amount_reason: string | null
          donor_timing_reason: string | null
          donor_next_donation_thoughts: string | null
          donor_retrospective: string | null
          payment_modality: string | null
          match_eligible: string | null
          goal_amount: string | null
          influencer: string | null
          employer_match: string | null
          matching_employer: string | null
          special_donation_reason: string | null
          donation_earmark: string | null
          affected_countries: string | null
          affected_states: string | null
          affected_cities: string | null
          affected_regions: string | null
          donation_announcement_date: string | null
          donation_announcement_date_precision: string | null
          donation_announcement_url: string | null
          predictions: string | null
          is_contractwork: string | null
        }
        Insert: {
          donation_id: number
          donor?: string | null
          donee?: string | null
          amount?: number | null
          amount_original_currency?: string | null
          original_currency?: string | null
          currency_conversion_date?: string | null
          currency_conversion_basis?: string | null
          fraction?: string | null
          donation_date?: string | null
          donation_date_precision?: string | null
          donation_date_basis?: string | null
          cause_area?: string | null
          url?: string | null
          donor_cause_area_url?: string | null
          notes?: string | null
          donation_process?: string | null
          intended_use_of_funds_category?: string | null
          intended_use_of_funds?: string | null
          intended_funding_timeframe_in_months?: string | null
          donor_donee_reason?: string | null
          donor_amount_reason?: string | null
          donor_timing_reason?: string | null
          donor_next_donation_thoughts?: string | null
          donor_retrospective?: string | null
          payment_modality?: string | null
          match_eligible?: string | null
          goal_amount?: string | null
          influencer?: string | null
          employer_match?: string | null
          matching_employer?: string | null
          special_donation_reason?: string | null
          donation_earmark?: string | null
          affected_countries?: string | null
          affected_states?: string | null
          affected_cities?: string | null
          affected_regions?: string | null
          donation_announcement_date?: string | null
          donation_announcement_date_precision?: string | null
          donation_announcement_url?: string | null
          predictions?: string | null
          is_contractwork?: string | null
        }
        Update: {
          donation_id?: number
          donor?: string | null
          donee?: string | null
          amount?: number | null
          amount_original_currency?: string | null
          original_currency?: string | null
          currency_conversion_date?: string | null
          currency_conversion_basis?: string | null
          fraction?: string | null
          donation_date?: string | null
          donation_date_precision?: string | null
          donation_date_basis?: string | null
          cause_area?: string | null
          url?: string | null
          donor_cause_area_url?: string | null
          notes?: string | null
          donation_process?: string | null
          intended_use_of_funds_category?: string | null
          intended_use_of_funds?: string | null
          intended_funding_timeframe_in_months?: string | null
          donor_donee_reason?: string | null
          donor_amount_reason?: string | null
          donor_timing_reason?: string | null
          donor_next_donation_thoughts?: string | null
          donor_retrospective?: string | null
          payment_modality?: string | null
          match_eligible?: string | null
          goal_amount?: string | null
          influencer?: string | null
          employer_match?: string | null
          matching_employer?: string | null
          special_donation_reason?: string | null
          donation_earmark?: string | null
          affected_countries?: string | null
          affected_states?: string | null
          affected_cities?: string | null
          affected_regions?: string | null
          donation_announcement_date?: string | null
          donation_announcement_date_precision?: string | null
          donation_announcement_url?: string | null
          predictions?: string | null
          is_contractwork?: string | null
        }
      }
      donationsea: {
        Row: {
          donation_id: number
          donor: string | null
          donee: string | null
          amount: string | null
          amount_original_currency: string | null
          original_currency: string | null
          currency_conversion_date: string | null
          currency_conversion_basis: string | null
          fraction: string | null
          donation_date: string | null
          donation_date_precision: string | null
          donation_date_basis: string | null
          cause_area: string | null
          url: string | null
          donor_cause_area_url: string | null
          notes: string | null
          donation_process: string | null
          intended_use_of_funds_category: string | null
          intended_use_of_funds: string | null
          intended_funding_timeframe_in_months: string | null
          donor_donee_reason: string | null
          donor_amount_reason: string | null
          donor_timing_reason: string | null
          donor_next_donation_thoughts: string | null
          donor_retrospective: string | null
          payment_modality: string | null
          match_eligible: string | null
          goal_amount: string | null
          influencer: string | null
          employer_match: string | null
          matching_employer: string | null
          special_donation_reason: string | null
          donation_earmark: string | null
          affected_countries: string | null
          affected_states: string | null
          affected_cities: string | null
          affected_regions: string | null
          donation_announcement_date: string | null
          donation_announcement_date_precision: string | null
          donation_announcement_url: string | null
          predictions: string | null
          is_contractwork: string | null
        }
        Insert: {
          donation_id: number
          donor?: string | null
          donee?: string | null
          amount?: string | null
          amount_original_currency?: string | null
          original_currency?: string | null
          currency_conversion_date?: string | null
          currency_conversion_basis?: string | null
          fraction?: string | null
          donation_date?: string | null
          donation_date_precision?: string | null
          donation_date_basis?: string | null
          cause_area?: string | null
          url?: string | null
          donor_cause_area_url?: string | null
          notes?: string | null
          donation_process?: string | null
          intended_use_of_funds_category?: string | null
          intended_use_of_funds?: string | null
          intended_funding_timeframe_in_months?: string | null
          donor_donee_reason?: string | null
          donor_amount_reason?: string | null
          donor_timing_reason?: string | null
          donor_next_donation_thoughts?: string | null
          donor_retrospective?: string | null
          payment_modality?: string | null
          match_eligible?: string | null
          goal_amount?: string | null
          influencer?: string | null
          employer_match?: string | null
          matching_employer?: string | null
          special_donation_reason?: string | null
          donation_earmark?: string | null
          affected_countries?: string | null
          affected_states?: string | null
          affected_cities?: string | null
          affected_regions?: string | null
          donation_announcement_date?: string | null
          donation_announcement_date_precision?: string | null
          donation_announcement_url?: string | null
          predictions?: string | null
          is_contractwork?: string | null
        }
        Update: {
          donation_id?: number
          donor?: string | null
          donee?: string | null
          amount?: string | null
          amount_original_currency?: string | null
          original_currency?: string | null
          currency_conversion_date?: string | null
          currency_conversion_basis?: string | null
          fraction?: string | null
          donation_date?: string | null
          donation_date_precision?: string | null
          donation_date_basis?: string | null
          cause_area?: string | null
          url?: string | null
          donor_cause_area_url?: string | null
          notes?: string | null
          donation_process?: string | null
          intended_use_of_funds_category?: string | null
          intended_use_of_funds?: string | null
          intended_funding_timeframe_in_months?: string | null
          donor_donee_reason?: string | null
          donor_amount_reason?: string | null
          donor_timing_reason?: string | null
          donor_next_donation_thoughts?: string | null
          donor_retrospective?: string | null
          payment_modality?: string | null
          match_eligible?: string | null
          goal_amount?: string | null
          influencer?: string | null
          employer_match?: string | null
          matching_employer?: string | null
          special_donation_reason?: string | null
          donation_earmark?: string | null
          affected_countries?: string | null
          affected_states?: string | null
          affected_cities?: string | null
          affected_regions?: string | null
          donation_announcement_date?: string | null
          donation_announcement_date_precision?: string | null
          donation_announcement_url?: string | null
          predictions?: string | null
          is_contractwork?: string | null
        }
      }
      donationz: {
        Row: {
          donation_id: number
          donor: string | null
          donee: string | null
          amount: number | null
        }
        Insert: {
          donation_id: number
          donor?: string | null
          donee?: string | null
          amount?: number | null
        }
        Update: {
          donation_id?: number
          donor?: string | null
          donee?: string | null
          amount?: number | null
        }
      }
      donees: {
        Row: {
          donee_id: number
          donee_type:
            | "Private nonprofit"
            | "Donor-advised fund"
            | "Subsidiary"
            | null
          donee: string
          other_names: string | null
          country: string | null
          bay_area: boolean | null
          facebook_username: string | null
          website: string | null
          donate_page: string | null
          donor_list_page: string | null
          transparency_and_financials_page: string | null
          donation_case_page: string | null
          donation_statistics_page: string | null
          contact_email: string | null
          twitter_username: string | null
          eahub_username: string | null
          wikipedia_page: string | null
          givewell_review: string | null
          open_phil_grant_review: string | null
          ace_review: string | null
          key_people: string | null
          cause_area: string | null
          recommenders: string | null
          launch_date: string | null
          launch_date_precision: "day" | "month" | "year" | "multi-year" | null
          launch_date_url: string | null
          notes: string | null
          youtube_username: string | null
          instagram_username: string | null
          tumblr_subdomain: string | null
          medium_username: string | null
          pinterest_username: string | null
          charity_navigator_page: string | null
          guidestar_page: string | null
          timelines_wiki_page: string | null
          autogenerated: boolean | null
          orgwatch: boolean | null
        }
        Insert: {
          donee_id?: number
          donee_type?:
            | "Private nonprofit"
            | "Donor-advised fund"
            | "Subsidiary"
            | null
          donee: string
          other_names?: string | null
          country?: string | null
          bay_area?: boolean | null
          facebook_username?: string | null
          website?: string | null
          donate_page?: string | null
          donor_list_page?: string | null
          transparency_and_financials_page?: string | null
          donation_case_page?: string | null
          donation_statistics_page?: string | null
          contact_email?: string | null
          twitter_username?: string | null
          eahub_username?: string | null
          wikipedia_page?: string | null
          givewell_review?: string | null
          open_phil_grant_review?: string | null
          ace_review?: string | null
          key_people?: string | null
          cause_area?: string | null
          recommenders?: string | null
          launch_date?: string | null
          launch_date_precision?: "day" | "month" | "year" | "multi-year" | null
          launch_date_url?: string | null
          notes?: string | null
          youtube_username?: string | null
          instagram_username?: string | null
          tumblr_subdomain?: string | null
          medium_username?: string | null
          pinterest_username?: string | null
          charity_navigator_page?: string | null
          guidestar_page?: string | null
          timelines_wiki_page?: string | null
          autogenerated?: boolean | null
          orgwatch?: boolean | null
        }
        Update: {
          donee_id?: number
          donee_type?:
            | "Private nonprofit"
            | "Donor-advised fund"
            | "Subsidiary"
            | null
          donee?: string
          other_names?: string | null
          country?: string | null
          bay_area?: boolean | null
          facebook_username?: string | null
          website?: string | null
          donate_page?: string | null
          donor_list_page?: string | null
          transparency_and_financials_page?: string | null
          donation_case_page?: string | null
          donation_statistics_page?: string | null
          contact_email?: string | null
          twitter_username?: string | null
          eahub_username?: string | null
          wikipedia_page?: string | null
          givewell_review?: string | null
          open_phil_grant_review?: string | null
          ace_review?: string | null
          key_people?: string | null
          cause_area?: string | null
          recommenders?: string | null
          launch_date?: string | null
          launch_date_precision?: "day" | "month" | "year" | "multi-year" | null
          launch_date_url?: string | null
          notes?: string | null
          youtube_username?: string | null
          instagram_username?: string | null
          tumblr_subdomain?: string | null
          medium_username?: string | null
          pinterest_username?: string | null
          charity_navigator_page?: string | null
          guidestar_page?: string | null
          timelines_wiki_page?: string | null
          autogenerated?: boolean | null
          orgwatch?: boolean | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
