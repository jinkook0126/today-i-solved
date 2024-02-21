import type { ComponentPropsWithoutRef } from 'react';
import { useRef, useState } from 'react';
import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { useController, FieldValues, FieldPath, Control } from 'react-hook-form';

interface RegisterInputProps<T extends FieldValues> extends ComponentPropsWithoutRef<'input'> {
  label: string;
  size: number;
  name: FieldPath<T>;
  control: Control<T>;
  rules?: object;
}
const RegisterInput = <T extends FieldValues>({
  label,
  size,
  name,
  control,
  rules,
  ...rest
}: RegisterInputProps<T>) => {
  const [color, setColor] = useState('black');
  const labelRef = useRef<HTMLLabelElement>(null);

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <FormControl>
      <FormLabel
        ref={labelRef}
        color={color}
        fontWeight='bold'
        fontSize='md'
        transitionDuration={'0.125s'}
        transitionDelay={'0s'}
        transitionTimingFunction={'ease-in'}
        transitionProperty={'all'}
      >
        {label}
      </FormLabel>
      <Input
        w='unset'
        borderRadius={0}
        pb='8px'
        fontSize='lg'
        variant='unstyled'
        borderBottomWidth='1px'
        borderBottomColor='gray.500'
        _focus={{
          borderBottomColor: 'teal.500',
          color: 'teal.500',
        }}
        transitionDuration={'0.125s'}
        transitionDelay={'0s'}
        transitionTimingFunction={'ease-in'}
        transitionProperty={'all'}
        htmlSize={size}
        onBlur={() => {
          setColor('black');
          field.onBlur();
        }}
        onFocus={() => setColor('teal.500')}
        onChange={field.onChange}
        {...rest}
      />
      <Text fontSize={'xs'} color={'red.500'} mt={1}>
        {error?.message}
      </Text>
    </FormControl>
  );
};

export default RegisterInput;
