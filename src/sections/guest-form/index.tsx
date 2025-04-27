import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sendToTelegram } from "./actions";
import { FormData, Guest } from "./types";
import { InView } from "@/components/ui/in-view";

const defaultValues: FormData = {
  additionalGuests: [],
  attending: true,
  mainGuest: "",
  preferences: {
    strongAlcohol: false,
    redWine: false,
    whiteWine: false,
  },
};

export const GuestForm = () => {
  const [attending, setAttending] = useState<boolean>(true);
  const [mainGuest, setMainGuest] = useState("");
  const [additionalGuests, setAdditionalGuests] = useState<Guest[]>([]);
  const [preferences, setPreferences] = useState({
    strongAlcohol: false,
    redWine: false,
    whiteWine: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(defaultValues);

  const handlePreferenceChange = (preference: keyof typeof preferences) => {
    setPreferences((prev) => ({
      ...prev,
      [preference]: !prev[preference],
    }));
  };

  const addGuest = () => {
    setAdditionalGuests([...additionalGuests, { name: "" }]);
  };

  const updateGuestName = (index: number, name: string) => {
    const updatedGuests = [...additionalGuests];
    updatedGuests[index].name = name;
    setAdditionalGuests(updatedGuests);
  };

  // Обновляем функцию handleSubmit для лучшей обработки ошибок
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Фильтруем пустых гостей перед отправкой
    const filteredGuests = additionalGuests.filter(
      (guest) => guest.name.trim() !== ""
    );

    const data = {
      attending,
      mainGuest,
      additionalGuests: filteredGuests,
      preferences,
    };

    setFormData(data);

    try {
      const result = await sendToTelegram(data);

      if (!result.success && result.error) {
        console.error("Error sending to Telegram:", result.error);
        // Можно добавить отображение ошибки для пользователя
        // Но в любом случае показываем сообщение о завершении
      }

      // Даже если была ошибка с Telegram, мы все равно показываем пользователю сообщение об успешной отправке
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error in form submission:", error);
      // Показываем сообщение об успешной отправке даже при ошибке
      setIsSubmitted(true);
    }
  };

  if (isSubmitted && formData) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-red-500 text-center">
            Спасибо за ответ!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Ваши ответы:</p>
          <ul className="space-y-2">
            <li>
              <strong>Присутствие:</strong> {formData.attending ? "Да" : "Нет"}
            </li>
            <li>
              <strong>Имя:</strong> {formData.mainGuest}
            </li>
            {formData.additionalGuests.length > 0 && (
              <li>
                <strong>Дополнительные гости:</strong>
                <ul className="ml-4">
                  {formData.additionalGuests.map((guest: Guest, i: number) => (
                    <li key={i}>{guest.name}</li>
                  ))}
                </ul>
              </li>
            )}
            <li>
              <strong>Предпочтения по напиткам:</strong>
              <ul className="ml-4">
                {formData.preferences.strongAlcohol && (
                  <li>Крепкий алкоголь</li>
                )}
                {formData.preferences.redWine && <li>Красное вино</li>}
                {formData.preferences.whiteWine && <li>Белое вино</li>}
              </ul>
            </li>
          </ul>
          <p className="text-center mt-6 text-red-500">
            {formData.attending
              ? "Ждем вас на свадьбе!"
              : "Если передумаете, переотправьте форму!"}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {" "}
        <CardHeader>
          <CardTitle className="text-center">Анкета гостя</CardTitle>
        </CardHeader>
      </InView>

      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <CardContent className="relative z-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label>Сможете ли присутствовать на торжестве?</Label>
              <Tabs
                defaultValue="yes"
                onValueChange={(value) => setAttending(value === "yes")}
                className="w-full"
              >
                <TabsList className="w-full">
                  <TabsTrigger value="yes">Да</TabsTrigger>
                  <TabsTrigger value="no">Нет</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Укажите вашу фамилию и имя</Label>
              <Input
                id="name"
                value={mainGuest}
                onChange={(e) => setMainGuest(e.target.value)}
              />
            </div>

            {additionalGuests.map((guest, index) => (
              <div key={index} className="space-y-2">
                <Label htmlFor={`guest-${index}`}>
                  Фамилия и имя гостя {index + 1}
                </Label>
                <Input
                  id={`guest-${index}`}
                  value={guest.name}
                  onChange={(e) => updateGuestName(index, e.target.value)}
                />
              </div>
            ))}

            <Button
              type="button"
              variant="secondary"
              className="w-full relative z-10 "
              onClick={addGuest}
            >
              Добавить гостя
            </Button>

            <div className="space-y-3">
              <Label>Ваши предпочтения по крепким напиткам</Label>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="strongAlcohol"
                  checked={preferences.strongAlcohol}
                  onCheckedChange={() =>
                    handlePreferenceChange("strongAlcohol")
                  }
                />
                <Label htmlFor="strongAlcohol">Крепкий алкоголь</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="redWine"
                  checked={preferences.redWine}
                  onCheckedChange={() => handlePreferenceChange("redWine")}
                />
                <Label htmlFor="redWine">Красное вино</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="whiteWine"
                  checked={preferences.whiteWine}
                  onCheckedChange={() => handlePreferenceChange("whiteWine")}
                />
                <Label htmlFor="whiteWine">Белое вино</Label>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-transparent border border-red-600/20 text-red-500 cursor-pointer hover:bg-red-700/10"
            >
              Отправить
            </Button>
          </form>
        </CardContent>
      </InView>
    </Card>
  );
};
